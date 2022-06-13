import './Board.css';

export default function Board(props) {
  const { handleBoardClick, board } = props;
  return (
    <div className='board animate__animated animate__rotateIn'>
      <div
        className='center border-right border-bottom'
        onClick={() => handleBoardClick(0)}
      >
        {board[0]}
      </div>
      <div 
        className='center border-right border-bottom'
        onClick={() => handleBoardClick(1)}
      >
        {board[1]}
      </div>
      <div 
        className='center border-bottom'
        onClick={() => handleBoardClick(2)}
      >
        {board[2]}
      </div>
      <div 
        className='center border-right border-bottom'
        onClick={() => handleBoardClick(3)}
      >
        {board[3]}
      </div>
      <div 
        className='center border-right border-bottom'
        onClick={() => handleBoardClick(4)}
      >
        {board[4]}
      </div>
      <div 
        className='center border-bottom'
        onClick={() => handleBoardClick(5)}
      >
        {board[5]}
      </div>
      <div 
        className='center border-right'
        onClick={() => handleBoardClick(6)}
      >
        {board[6]}
      </div>
      <div 
        className='center border-right'
        onClick={() => handleBoardClick(7)}
      >
        {board[7]}
      </div>
      <div 
        className='center'
        onClick={() => handleBoardClick(8)}
      >
        {board[8]}
      </div>
    </div>
  )
}
