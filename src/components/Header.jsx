import { InfoCircleFill, FileBarGraphFill } from 'react-bootstrap-icons';
import DayNightToggle from 'react-day-and-night-toggle';
import sweetAlert from './sweetAlert';

function Header({ isDarkMode, setIsDarkMode, statistics }) {
  const changeTheme = () => {
    // let dataTheme = document.documentElement.getAttribute('data-theme');
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('data-theme', 'dark');
    }

    setIsDarkMode(!isDarkMode);
  };

  const modalSatistics = () => {
    sweetAlert({
      type: 'statistics',
      data: {
        ...statistics,
      },
    });
  };

  const modalInstructions = () => {
    sweetAlert({
      type: 'instructions',
    });
  };
  return (
    <div className='row align-items-center header-bar'>
      <div className='col-sm-4'>
        <button
          className='btn btn-outline-light border-0'
          onClick={modalInstructions}
        >
          <InfoCircleFill size={25} />
        </button>
      </div>

      <div className='col-sm-4'>
        <h5 className='text-center'>WORDLE</h5>
      </div>
      <div className='col-sm-2 text-right'>
        <button
          className='btn btn-outline-light border-0'
          onClick={modalSatistics}
        >
          <FileBarGraphFill size={25} />
        </button>
      </div>
      <div className='col-sm-2'>
        <DayNightToggle onChange={changeTheme} checked={isDarkMode} size={25} />
      </div>
    </div>
  );
}

export default Header;
