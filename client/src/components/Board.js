import React from 'react'
import Square from './Square.js'

const Board = ({
  squares,
  players,
  gameOver,
  dispatch
}) => (
  <div className={`board ${players.length > 0 ? 'flash-once' : ''}`}>
    {
      squares.map((value, index) => (
        <Square
          key={index}
          clickable={
            players[0] &&
            players[0] === 'PLAYER' &&
            squares[index] === '' &&
            !gameOver
          }
          index={index}
          dispatch={dispatch}
        >
          {value.toUpperCase()}
        </Square>
      ))
    }
  </div>
)

export default Board
