import React, { Component } from 'react'
import { connect } from 'react-redux'
import StartScreen from './components/StartScreen.js'
import Board from './components/Board.js'

class App extends Component {
  render () {
    const { players, dispatch } = this.props

    return (
      <div className='container'>
        {
          players.length < 1 &&
          <StartScreen dispatch={dispatch} />
        }
        <Board
          {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { squares, players, gameOver } = state
  return {
    squares,
    players,
    gameOver
  }
}

const connectedApp = connect(mapStateToProps)(App)

export default connectedApp
