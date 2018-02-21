class Bot {

  constructor (board, letter) {
    this.bestMove = null
    this.minimax(board, letter)
    return bestMove
  }

  minimax (board, letter) {
    let ownScore = this.getScore(board, letter)
    let oppScore = this.getScore(board, this.flip(letter))

    if (ownScore >= 0) {
      return ownScore
    } else if (oppScore > 0) {
      return -1
    }

  }

  getScore (board, letter) {
    // HORIZONTAL
    if ((board[0] === letter &&
        board[1] === letter &&
        board[2] === letter) ||
      (board[3] === letter &&
        board[4] === letter &&
        board[5] === letter) ||
      (board[6] === letter &&
        board[7] === letter &&
        board[8] === letter)) {
      return 1
    // VERTICAL
    } else if ((board[0] === letter &&
        board[3] === letter &&
        board[6] === letter) ||
      (board[1] === letter &&
        board[4] === letter &&
        board[7] === letter) ||
      (board[2] === letter &&
        board[5] === letter &&
        board[8] === letter)) {
      return 1
    // DIAGONAL
    } else if ((board[0] === letter &&
        board[4] === letter &&
        board[8] === letter) ||
      (board[2] === letter &&
        board[4] === letter &&
        board[6] === letter)) {
      return 1
    } else if (!(board.includes(''))) {
      return 0
    }
    return -1
  }

  generateNextMoves (board, letter) {
    return board
      .reduce((moves, val, index, arr) => {
        if (val === '') {
          return [
          ...moves,
            [
              ...arr.slice(0, index),
              letter,
              ...arr.slice(index + 1)
            ]
          ]
        } else {
          return moves
        }
      }, [])
  }

  flip (letter) {
    return letter === 'X' ? 'O' : 'X'
  }

}

// BASIC TESTS
console.log('--- BASIC TESTS ---')
console.log('cat game...')
console.log(new Bot(
  [
    'X', 'O', 'X',
    'O', 'O', 'X',
    'X', 'X', 'O'
  ],
  'X'
))

