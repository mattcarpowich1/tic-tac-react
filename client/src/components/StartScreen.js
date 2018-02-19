import React from 'react'
import { selectLetter } from '../actions.js'

const StartScreen = ({dispatch}) => (
  <div className='start-screen'>
    <button onClick={
      () => dispatch(selectLetter('X'))}>
      X
    </button>
    <button onClick={
      () => dispatch(selectLetter('O'))}>
      O
    </button>
  </div>
)

export default StartScreen
