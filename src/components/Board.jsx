import '../App.css';

function Board({ horizontalSize, verticalSize }) {
  const horizontalArray = Array.from(
    { length: horizontalSize },
    (_, i) => i + 1
  );
  const verticalArray = Array.from({ length: verticalSize }, (_, i) => i + 1);

  return (
    <div className='Board-module'>
      <div className='Board-module-board'>
        {horizontalArray.map((_, indexH) => {
          return (
            <div key={indexH} className='board-row'>
              {verticalArray.map((_, indexV) => {
                return (
                  <div
                    key={indexV}
                    id={`${indexH}.${indexV}`}
                    className='cube'
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
