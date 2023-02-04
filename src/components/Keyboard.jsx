import { Backspace } from 'react-bootstrap-icons';

function Keyboard({ keyPressed }) {
  return (
    <div className='Keyboard-module'>
      <div id='keyboard-cont'>
        <div className='first-row'>
          <button
            className='keyboard-button'
            value='Q'
            id='Q'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            q
          </button>
          <button
            className='keyboard-button'
            value='W'
            id='W'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            w
          </button>
          <button
            className='keyboard-button'
            value='E'
            id='E'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            e
          </button>
          <button
            className='keyboard-button'
            value='R'
            id='R'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            r
          </button>
          <button
            className='keyboard-button'
            value='T'
            id='T'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            t
          </button>
          <button
            className='keyboard-button'
            value='Y'
            id='Y'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            y
          </button>
          <button
            className='keyboard-button'
            value='U'
            id='U'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            u
          </button>
          <button
            className='keyboard-button'
            value='I'
            id='I'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            i
          </button>
          <button
            className='keyboard-button'
            value='O'
            id='O'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            o
          </button>
          <button
            className='keyboard-button'
            value='P'
            id='P'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            p
          </button>
        </div>
        <div className='second-row'>
          <div className='flex-div'></div>
          <button
            className='keyboard-button'
            value='A'
            id='A'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            a
          </button>
          <button
            className='keyboard-button'
            value='S'
            id='S'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            s
          </button>
          <button
            className='keyboard-button'
            value='D'
            id='D'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            d
          </button>
          <button
            className='keyboard-button'
            value='F'
            id='F'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            f
          </button>
          <button
            className='keyboard-button'
            value='G'
            id='G'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            g
          </button>
          <button
            className='keyboard-button'
            value='H'
            id='H'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            h
          </button>
          <button
            className='keyboard-button'
            value='J'
            id='J'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            j
          </button>
          <button
            className='keyboard-button'
            value='K'
            id='K'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            k
          </button>
          <button
            className='keyboard-button'
            value='L'
            id='L'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            l
          </button>
          <div className='flex-div'></div>
        </div>
        <div className='third-row'>
          <button
            className='keyboard-button p-3'
            value='ENTER'
            id='ENTER'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            ENTER
          </button>
          <button
            className='keyboard-button'
            value='Z'
            id='Z'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            z
          </button>
          <button
            className='keyboard-button'
            value='X'
            id='X'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            x
          </button>
          <button
            className='keyboard-button'
            value='C'
            id='C'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            c
          </button>
          <button
            className='keyboard-button'
            value='V'
            id='V'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            v
          </button>
          <button
            className='keyboard-button'
            value='B'
            id='B'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            b
          </button>
          <button
            className='keyboard-button'
            value='N'
            id='N'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            n
          </button>
          <button
            className='keyboard-button'
            value='M'
            id='M'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            m
          </button>
          <button
            className='keyboard-button p-3'
            value='DEL'
            id='DEL'
            onClick={(e) => {
              keyPressed(e);
            }}
          >
            <Backspace id='DEL' size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Keyboard;
