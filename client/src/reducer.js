import { checkGame } from './utils/checkGame.js'
import { botMove } from './utils/bot.js'

const initialState = {
  squares: [
    '', '', '',
    '', '', '',
    '', '', ''
  ],
  players: [],
  playerLetter: '',
  botLetter: '',
  gameOver: false
}

const gameReducer = (state = initialState, action) => {
  const {
    squares,
    playerLetter,
    botLetter,
    gameOver
  } = state
  let nextBoard, nextIndex
  switch (action.type) {
    case 'USER_SELECT_LETTER':
      return {
        ...state,
        players: action.letter === 'X'
          ? ['PLAYER', 'BOT']
          : ['BOT', 'PLAYER'],
        playerLetter: action.letter,
        botLetter: action.letter === 'X'
          ? 'O'
          : 'X'
      }

    case 'USER_MOVE':
      nextBoard = [
        ...squares.slice(0, action.index),
        playerLetter,
        ...squares.slice(action.index + 1)
      ]

      if (checkGame(nextBoard, playerLetter)) {
        return {
          ...state,
          squares: nextBoard,
          gameOver: true
        }
      } else {
        return {
          ...state,
          squares: nextBoard,
          players: ['BOT', 'PLAYER']
        }
      }

    case 'BOT_MOVE':
      if (gameOver) {
        return state
      }

      nextIndex = botMove(squares, botLetter)

      if (nextIndex > -1) {
        nextBoard = [
          ...squares.slice(0, nextIndex),
          botLetter,
          ...squares.slice(nextIndex + 1)
        ]

        if (checkGame(nextBoard, botLetter)) {
          return {
            ...state,
            squares: nextBoard,
            gameOver: true
          }
        } else {
          return {
            ...state,
            squares: nextBoard,
            players: ['PLAYER', 'BOT']
          }
        }
      } else {
        return {
          ...state,
          gameOver: true
        }
      }

    default:
      return state
  }
}

export default gameReducer
