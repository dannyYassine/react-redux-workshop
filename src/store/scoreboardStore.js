/**
 * Created by dannyyassine on 2017-04-22.
 */

import { createStore, applyMiddleware } from 'redux'
import PlayerReducer from '../reducers/players'
import { persistStateToLocalStorageMiddleware } from '../middlewares/persistStateLocalManager'

export const store = createStore(
    PlayerReducer,
    applyMiddleware(persistStateToLocalStorageMiddleware),
)