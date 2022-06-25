import './Cell.css';

export default function Cell(props) {
  const { id, mark, handleBoardClick } = props;

  function determineColor(mark) {
    return mark === 'O' ? 'cyan' : 'purple';
  }

  return (
    <div
      className='cell center'
      onClick={() => handleBoardClick(id)}
    >
      <p className={determineColor(mark)}>{mark}</p>
    </div>
  )
}