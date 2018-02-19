export const selectLetter = choice => {
  return dispatch => {
    if (choice === 'X' || choice === 'O') {
      dispatch({
        type: 'USER_SELECT_LETTER',
        letter: choice
      })
      if (choice === 'O') {
        setTimeout(() => {
          dispatch({
            type: 'BOT_MOVE'
          })
        }, 1000)
      }
    } else {
      throw new Error(`Invalid choice ${choice}`)
    }
  }
}

export const userMove = index => {
  return dispatch => {
    dispatch({
      type: 'USER_MOVE',
      index
    })
    setTimeout(() => {
      dispatch({
        type: 'BOT_MOVE'
      })
    }, 1000)
  }
}
