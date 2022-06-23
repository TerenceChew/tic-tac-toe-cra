import { useEffect, useState } from 'react';
import './App.css';
import 'animate.css';
import Board from '../components/Board/Board';


export default function App() {
  const [ won, setWon ] = useState(false);
  const [ draw, setDraw ] = useState(false);
  const [ turn, setTurn ] = useState('O');
  const [ board, setBoard ] = useState(new Array(9).fill(''));
  const [ winner, setWinner ] = useState('');

  function resetGame() {
    setWon(false);
    setDraw(false);
    setTurn('O');
    setBoard(new Array(9).fill(''));
    setWinner('');
  }

  useEffect(() => {
    function checkWon() {
      const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
  
      const isWon = winningConditions.some(elem => {
        const a = board[elem[0]];
        const b = board[elem[1]];
        const c = board[elem[2]];
  
        return a !== '' && a === b && b === c; 
      })

      if (isWon === true) {
        setWon(true);
        setWinner(turn);
      } else {
        const boardNotFull = board.some(elem => {
          return elem === '';
        })

        if (boardNotFull) {
          if (turn === 'X') {
            setTurn('O');
          } else {
            setTurn('X')
          }
        } else {
          setDraw(true);
          setWinner('DRAW !');
        }
      }
    };
    checkWon(); // eslint-disable-next-line
  }, [board])

  function handleBoardClick(index) {
    if (turn === 'X' && board[index] === '' && won === false) {
      setBoard(prevBoard => prevBoard.map((elem, i) => {
        return index === i ? 'X' : elem;
      }));
    } else if (turn === 'O' && board[index] === '' && won === false) {
      setBoard(prevBoard => prevBoard.map((elem, i) => {
        return index === i ? 'O' : elem;
      }));
    }
  }

  return (
   <div className='page center'>
    <h3 className='animate__animated animate__slideInLeft'>TIC TAC TOE</h3>
    <p className='animate__animated animate__flash'>{turn}'s Turn</p>
    <Board handleBoardClick={handleBoardClick} board={board} />
    {won && <p className='animate__animated animate__flash'>{winner} Won !</p>}
    {draw && <p className='animate__animated animate__flash'>{winner}</p>}
    {(won || draw) && <button className='btn-reset animate__animated animate__zoomIn' onClick={resetGame}>NEW GAME</button>}
   </div>
  );
  }
