/**
 * Created by dannyyassine on 2017-04-19.
 */
import React from 'react'
import { render } from 'react-dom'
import Scoreboard from './src/containers/Scoreboard'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import PlayerReducer from './src/reducers/players'
import { persistStateToLocalStorageMiddleware } from './src/middlewares/persistStateLocalManager'

const store = createStore(
    PlayerReducer,
    applyMiddleware(persistStateToLocalStorageMiddleware),
)

render(
    <Provider store={store}>
        <Scoreboard />
    </Provider>,
  document.getElementById('root')
)
