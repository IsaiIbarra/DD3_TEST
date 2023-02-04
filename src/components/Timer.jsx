import { useState, useEffect } from 'react';

function Timer({ setFlagNewWord, loading, pauseTimer, getTimer }) {
  const [dataTimer, setDataTimer] = useState({
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!pauseTimer) {
      setTimeout(() => {
        // setTimeLeft(calculateTimeLeft());
        setDataTimer(calculateTime());
      }, 1000);
    }
  });

  useEffect(() => {
    if (loading)
      setDataTimer({
        minutes: 0,
        seconds: 0,
      });
  }, [loading]);

  const calculateTime = () => {
    if (dataTimer.minutes == 5) {
      setFlagNewWord(true);
      return {
        minutes: 0,
        seconds: 0,
      };
    } else if (dataTimer.seconds == 59) {
      return {
        minutes: dataTimer.minutes + 1,
        seconds: 0,
      };
    } else {
      return {
        ...dataTimer,
        seconds: dataTimer.seconds + 1,
      };
    }
  };

  useEffect(() => {
    if (pauseTimer)
      getTimer(
        `${dataTimer.minutes}:${
          dataTimer.seconds < 10 ? '0' + dataTimer.seconds : dataTimer.seconds
        }`
      );
  }, [pauseTimer]);

  return (
    <div className='timer text-center'>
      {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
      {`${dataTimer.minutes}:${
        dataTimer.seconds < 10 ? '0' + dataTimer.seconds : dataTimer.seconds
      }`}
    </div>
  );
}

export default Timer;
