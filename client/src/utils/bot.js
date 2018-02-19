// TO BE REPLACED BY SOME TYPE OF GAME TREE SEARCH
export const botMove = (board, letter) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      return i
    }
  }
  return -1
}
