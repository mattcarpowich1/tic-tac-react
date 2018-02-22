export class Bot {
  constructor (board, letter) {
    this.nextMove = null
    this.letter = letter
    this.minimax(board, letter, 0)
    this.maxDepth = 2
    return this.nextMove
  }

  makeMove () {
    this.minimax(this.board, this.letter)
    return this.nextMove
  }

  minimax (board, letter, depth) {
    if (depth === this.maxDepth) {
      return 0
    }

    let ownScore = getScore(board, this.letter)
    let oppScore = getScore(board, this.flip(this.letter))

    if (ownScore > 0) {
      return 10 - depth
    } else if (ownScore === 0) {
      return 0
    } else if (oppScore > 0) {
      return depth - 10
    }

    let values = []
    const moves = this.generateNextMoves(board, letter)
    moves.forEach(m => {
      let v = this.minimax(m, this.flip(letter), depth + 1)
      values.push(v)
    })

    let bestValue = values[0]
    let bestMove = moves[0]

    for (let i = 1; i < values.length; i++) {
      if (letter === this.letter &&
        values[i] > bestValue) {
        bestValue = values[i]
        bestMove = moves[i]
      } else if (letter !== this.letter &&
        values[i] < bestValue) {
        bestValue = values[i]
        bestMove = moves[i]
      }
    }

    if (depth === 0) {
      this.nextMove = bestMove
    }

    return bestValue
  }

  generateNextMoves (board, letter) {
    let moves = []
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        moves.push([
          ...board.slice(0, i),
          letter,
          ...board.slice(i + 1)
        ])
      }
    }
    return moves
  }

  flip (letter) {
    return letter === 'X' ? 'O' : 'X'
  }
}

export const getScore = (board, letter) => {
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
