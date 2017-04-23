/**
 * Created by dannyyassine on 2017-04-19.
 */
import React from 'react'
import { render } from 'react-dom'
import Scoreboard from './src/containers/Scoreboard'
import { Provider } from 'react-redux'

import {store} from './src/store/scoreboardStore'

render(
    <Provider store={store}>
        <Scoreboard />
    </Provider>,
  document.getElementById('root')
)
