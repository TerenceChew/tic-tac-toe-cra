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
  const [ shouldAnimate, setShouldAnimate ] = useState(true); // determine if title, turn and board should animate or not

  // add animation to title, turn and board if shouldAnimate is true
  const titleAnimation = shouldAnimate ? 'animate__animated animate__slideInLeft' : '';
  const turnAnimation = shouldAnimate ? 'animate__animated animate__flash' : '';
  const boardAnimation = shouldAnimate ? 'animate__animated animate__rotateIn' : '';

  // set shouldAnimate to false after each render
  useEffect(() => {
    setTimeout(() => {
        setShouldAnimate(false);
    }, 1500);
  }, [shouldAnimate]);

  // set shouldAnimate to true
  // this is used to reset the animation for title, turn and board
  function resetAnimation() {
    setShouldAnimate(true);
  };

  // reset the game
  // and reset animation, so title, turn and board always animate after each game reset
  function resetGame() {
    setWon(false);
    setDraw(false);
    setTurn('O');
    setBoard(new Array(9).fill(''));
    setWinner('');
    resetAnimation();
  };

  // check win or draw whenever board changes
  // if not won and board is not full, switch player
  useEffect(() => {
    function checkWon() {
      // each position on board has a number, as shown below
      /*  
         0, 1, 2
         3, 4, 5
         6, 7, 8
      */
      // winning combinations according to the above position numbers
      const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
      
      // check if any combination returns true
      const isWon = winningCombinations.some(elem => {
        const a = board[elem[0]];
        const b = board[elem[1]];
        const c = board[elem[2]];
  
        return a !== '' && a === b && b === c;
      });

      // set winner and end the game
      if (isWon === true) {
        setWon(true);
        setWinner(turn);
      } else {
        const boardNotFull = board.includes(''); // if no winner, check if any board positions are still empty

        // if board is not full, switch player
        // else game is draw
        if (boardNotFull) { 
          turn === 'X' ? setTurn('O') : setTurn('X') 
        } else {
          setDraw(true);
          setWinner('DRAW !');
        };
      };
    };
    checkWon(); // eslint-disable-next-line
  }, [board]);

  // update board after each board click
  function handleBoardClick(index) {
    if (turn === 'X' && board[index] === '' && won === false) {
      setBoard(prevBoard => prevBoard.map((elem, i) => {
        return index === i ? 'X' : elem;
      }));
    } else if (turn === 'O' && board[index] === '' && won === false) {
      setBoard(prevBoard => prevBoard.map((elem, i) => {
        return index === i ? 'O' : elem;
      }));
    };
  };

  return (
   <div className='page center'>
    <h3 className={titleAnimation}>TIC TAC TOE</h3>
    <p className={turnAnimation}>{(won || draw) ? 'GAME END' : `${turn}'s Turn`}</p>
    <Board boardAnimation={boardAnimation} handleBoardClick={handleBoardClick} board={board} />
    {won && <p className='animate__animated animate__flash animate__infinite'>{winner} Won !</p>}
    {draw && <p className='animate__animated animate__flash animate__infinite'>{winner}</p>}
    {(won || draw) && <button className='btn-reset animate__animated animate__zoomIn' onClick={resetGame}>NEW GAME</button>}
   </div>
  );
  }
