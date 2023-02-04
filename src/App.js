import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { useEffect, useState } from 'react';
import words from './words.txt';
import sweetAlert from './components/sweetAlert';
import Header from './components/Header';
import Timer from './components/Timer';

function App() {
  const horizontalSize = 5;
  const verticalSize = 5;

  const [playableWord, setPlayableWord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [flagNewWord, setFlagNewWord] = useState(false);
  const [statistics, setStatistics] = useState({
    wordsPlayed: 0,
    wins: 0,
  });
  const [pauseTimer, setPauseTimer] = useState(false);

  useEffect(() => {
    getLog();
  }, []);

  useEffect(() => {
    if (flagNewWord) {
      setFlagNewWord(false);

      let elements = [...document.getElementsByClassName('cubes')];
      elements.map((item) => {
        item.classList.remove(
          'bg-success',
          'bg-warning',
          'bg-secondary',
          'disabled'
        );
      });
      getWord();
      sweetAlert({
        type: 'toast',
        typeToast: 'info',
        message: '¡Nueva Palabra!',
      });
    }
  }, [flagNewWord]);

  const getWord = async (win) => {
    let index;
    setLoading(true);

    await fetch(words)
      .then((res) => res.text())
      .then((text) => {
        let words = text.split('\n');
        let wordLength = 0;

        do {
          index = Math.floor(Math.random() * (words.length - 1));
          wordLength = words[index].trim().length;
          if (words[index].trim() == playableWord) wordLength = 0;
        } while (wordLength != 5);

        setPlayableWord(
          words[index]
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toUpperCase()
        );
        setStatistics({
          wordsPlayed: statistics.wordsPlayed + 1,
          wins: win ? statistics.wins + 1 : statistics.wins,
        });
        setLoading(false);
      })
      .catch((e) => console.warn(e));
  };

  const writeLetter = (key, currentRow) => {
    for (let i = 0; i < verticalSize; i++) {
      if (
        document.getElementById(`${currentRow}.${i}`).innerHTML == '' &&
        !document
          .getElementById(`${currentRow}.${i}`)
          .classList.contains('disabled')
      ) {
        return (document.getElementById(`${currentRow}.${i}`).innerHTML = key);
      }
    }
  };

  const findLetters = (currentRow) => {
    let initialWord = playableWord;
    let word = [...initialWord];
    let flag = false;
    let rightLetters = 0;

    for (let i = verticalSize - 1; i >= 0; i--) {
      if (document.getElementById(`${currentRow}.${i}`).innerHTML != '') {
        if (i == verticalSize - 1 || flag) {
          flag = true;
          let cubecontent = document.getElementById(
            `${currentRow}.${i}`
          ).innerHTML;
          if (word[i] == cubecontent) {
            rightLetters += 1;
            document
              .getElementById(`${currentRow}.${i}`)
              .classList.add('bg-success', 'disabled');

            document.getElementById(`${cubecontent.toUpperCase()}`).className =
              'keyboard-button bg-success';
          } else if (word.includes(cubecontent)) {
            document
              .getElementById(`${currentRow}.${i}`)
              .classList.add('bg-warning', 'disabled');

            if (
              !document
                .getElementById(`${cubecontent.toUpperCase()}`)
                .classList.contains('bg-success')
            ) {
              document.getElementById(
                `${cubecontent.toUpperCase()}`
              ).className = 'keyboard-button bg-warning';
            }
          } else {
            document
              .getElementById(`${currentRow}.${i}`)
              .classList.add('bg-secondary', 'disabled');

            document.getElementById(`${cubecontent.toUpperCase()}`).className =
              'keyboard-button bg-secondary';
          }
        } else {
          return sweetAlert({
            type: 'toast',
            typeToast: 'info',
            message: 'Completa la fila',
          });
        }
      }

      if (rightLetters == verticalSize) {
        let cubes = [...document.getElementsByClassName('cube')];
        sweetAlert({
          type: 'toast',
          typeToast: 'success',
          message: '¡Felicidades, la has adivinado!',
        });
        cubes.map((item) => {
          item.innerHTML = '';
          item.classList.remove(
            'bg-success',
            'bg-warning',
            'bg-secondary',
            'disabled'
          );
        });
        getWord(true);
      }

      let elements = [...document.getElementsByClassName('disabled')];
      if (elements.length == verticalSize * horizontalSize) {
        setPauseTimer(true);
      }
    }
  };

  const removeLetter = (currentRow) => {
    for (let i = verticalSize - 1; i >= 0; i--) {
      if (
        document.getElementById(`${currentRow}.${i}`).innerHTML != '' &&
        !document
          .getElementById(`${currentRow}.${i}`)
          .classList.contains('disabled')
      ) {
        // document
        //   .getElementById(`${currentRow}.${i}`)
        //   .classList.remove('yellow', 'green');
        return (document.getElementById(`${currentRow}.${i}`).innerHTML = '');
      }
    }
  };

  const keyPressed = (e) => {
    let key = e.target.id;
    let currentRow = getCurrentRow();

    if (key == 'ENTER') findLetters(currentRow);
    else if (key == 'DEL') removeLetter(currentRow);
    else writeLetter(key, currentRow);
  };

  const getCurrentRow = () => {
    let elements = [...document.getElementsByClassName('disabled')];
    let row = parseInt(elements[elements.length - 1]?.id[0]);

    if (!isNaN(row) && row < 4) return row + 1;

    return 0;
  };

  const getLog = async () => {
    if (!localStorage.getItem('oldUser')) {
      let flag = await sweetAlert({
        type: 'instructions',
      });
      localStorage.setItem('oldUser', true);
      if (flag) getWord();
    }
    if (!localStorage.getItem('data-theme')) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      if (localStorage.getItem('data-theme') == 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        setIsDarkMode(false);
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        setIsDarkMode(true);
      }
    }
    getWord();
  };

  const getTimer = (timer) => {
    sweetAlert({
      type: 'loseGame',
      data: {
        ...statistics,
        word: playableWord,
        timer: timer,
      },
      confirmFunction: restart,
    });
  };

  const restart = () => {
    setPauseTimer(false);
    getWord();
  };

  return (
    <>
      {loading ? (
        <div className='row justify-content-center'>
          <div className='spinner-border' role='status'>
            <span className='sr-only'></span>
          </div>
        </div>
      ) : (
        <>
          <div className='game-body'>
            <Header
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
              statistics={statistics}
            />
            <Timer
              setFlagNewWord={setFlagNewWord}
              loading={loading}
              pauseTimer={pauseTimer}
              getTimer={getTimer}
            />
            <Board
              horizontalSize={horizontalSize}
              verticalSize={verticalSize}
            />
            <Keyboard keyPressed={keyPressed} />
          </div>
        </>
      )}
    </>
  );
}

export default App;
