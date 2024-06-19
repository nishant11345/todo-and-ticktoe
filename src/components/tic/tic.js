import React, { useState, useEffect } from 'react';
import './tic.css';

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isBlueNext, setIsBlueNext] = useState(true);
  const [scores, setScores] = useState({
    blue: parseInt(localStorage.getItem('blueScore')) || 0,
    red: parseInt(localStorage.getItem('redScore')) || 0,
  });
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem('blueScore', scores.blue);
    localStorage.setItem('redScore', scores.red);
  }, [scores]);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isBlueNext ? 'blue' : 'red';
    setBoard(newBoard);
    setIsBlueNext(!isBlueNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setScores({
        ...scores,
        [gameWinner]: scores[gameWinner] + 1,
      });
    }
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setWinner(null);
    setIsBlueNext(true);
  };

  return (
    <div className="game">
      <div className="score-board">
        <div className="score blue">Blue: {scores.blue}</div>
        <div className="score red">Red: {scores.red}</div>
      </div>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell}`}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
      {winner && (
        <div className="winner">
          {winner === 'blue' ? 'Blue' : 'Red'} wins!
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
