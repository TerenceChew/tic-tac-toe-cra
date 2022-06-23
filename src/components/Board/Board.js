import './Board.css';

export default function Board(props) {
  const { handleBoardClick, board } = props;

  function determineColor(player) {
    return player === 'O' ? 'purple' : 'cyan';
  }

  const [ b0, b1, b2, b3, b4, b5, b6, b7, b8 ] = board;

  return (
    <div className='board animate__animated animate__rotateIn'>
      <div
        className='center border-right border-bottom'
        onClick={() => handleBoardClick(0)}
      >
        <p className={determineColor(b0)}>{b0}</p>
      </div>
      <div 
        className='center border-right border-bottom'
        onClick={() => handleBoardClick(1)}
      >
        <p className={determineColor(b1)}>{b1}</p>
      </div>
      <div 
        className='center border-bottom'
        onClick={() => handleBoardClick(2)}
      >
        <p className={determineColor(b2)}>{b2}</p>
      </div>
      <div 
        className='center border-right border-bottom'
        onClick={() => handleBoardClick(3)}
      >
        <p className={determineColor(b3)}>{b3}</p>
      </div>
      <div 
        className='center border-right border-bottom'
        onClick={() => handleBoardClick(4)}
      >
        <p className={determineColor(b4)}>{b4}</p>
      </div>
      <div 
        className='center border-bottom'
        onClick={() => handleBoardClick(5)}
      >
        <p className={determineColor(b5)}>{b5}</p>
      </div>
      <div 
        className='center border-right'
        onClick={() => handleBoardClick(6)}
      >
        <p className={determineColor(b6)}>{b6}</p>
      </div>
      <div 
        className='center border-right'
        onClick={() => handleBoardClick(7)}
      >
        <p className={determineColor(b7)}>{b7}</p>
      </div>
      <div 
        className='center'
        onClick={() => handleBoardClick(8)}
      >
        <p className={determineColor(b8)}>{b8}</p>
      </div>
    </div>
  )
}
