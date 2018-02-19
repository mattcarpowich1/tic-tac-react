export const checkGame = (board, letter) => {
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
    return true
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
    return true
  // DIAGONAL
  } else if ((board[0] === letter &&
      board[4] === letter &&
      board[8] === letter) ||
    (board[2] === letter &&
      board[4] === letter &&
      board[6] === letter)) {
    return true
  }
  return false
}
