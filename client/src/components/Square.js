import React from 'react'
import { userMove } from '../actions.js'

const Square = ({
  children,
  clickable,
  index,
  dispatch
}) => (
  <div
    className={`square ${clickable ? 'clickable' : ''}`}
    onClick={() => {
      if (clickable) {
        dispatch(userMove(index))
      }
    }}>
    {children}
  </div>
)

export default Square
