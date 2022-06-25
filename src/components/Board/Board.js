import './Board.css';
import Cell from '../Cell/Cell';

export default function Board(props) {
  const { handleBoardClick, board } = props;

  const cellsToLoad = board.map((elem, i) => <Cell key={i} id={i} mark={elem} handleBoardClick={handleBoardClick} />)

  return (
    <div className='board animate__animated animate__rotateIn'>
      {cellsToLoad}
    </div>
  )
}
