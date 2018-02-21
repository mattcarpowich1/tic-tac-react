import { getScore } from './utils/checkGame.js'
import { minimax } from './utils/bot.js'

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

      if (getScore(nextBoard, playerLetter) >= 0) {
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

      console.log('----------')
      console.log(minimax(
        ['X', 'X', '',
        'O', 'O', 'O',
        '', 'X', ''],
        'X',
        true
      ))

      // nextBoard = 

      // if (checkGame(nextBoard, botLetter) >= 0) {
      //   console.log('ay')
      //   return {
      //     ...state,
      //     squares: nextBoard,
      //     gameOver: true
      //   }
      // } else {
      //   return {
      //     ...state,
      //     squares: nextBoard,
      //     players: ['PLAYER', 'BOT']
      //   }
      // }

    default:
      return state
  }
}

export default gameReducer
