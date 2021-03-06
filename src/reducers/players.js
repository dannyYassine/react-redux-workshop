/**
 * Created by dannyyassine on 2017-04-22.
 */
import * as PlayerActionTypes from '../actionTypes/player'
import LocalStateDataManager from '../middlewares/persistStateLocalManager'

const initialState = LocalStateDataManager.loadState()

function getRandomArbitrary(min=0, max=1000000) {
    return Math.floor(Math.random() * (max - min)) + min
}

export default function PlayerReducer(state=initialState, action) {

    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    switch(action.type) {

        case PlayerActionTypes.ADD_PLAYER:
            let foundPlayer = false
            for (const index in state.players) {

                if (state.players[index].name === action.name) {
                    foundPlayer = true
                    break
                }
            }

            if (foundPlayer) {return state}

            const addPlayerList = [...state.players,   {
                name: action.name,
                score: 0,
                id: getRandomArbitrary(),
                created: `${day}/${month}/${year}`,
                updated: `${day}/${month}/${year}`
            }]
            return {
                ...state,
                players: addPlayerList,
                selectedPlayerIndex: state.players.length
            }
        case PlayerActionTypes.REMOVE_PLAYER:
            const removePlayerList = [
                ...state.players.slice(0, action.index),
                ...state.players.slice(action.index + 1)
            ]
            return {
                ...state,
                players: removePlayerList
            }
        case PlayerActionTypes.UPDATE_PLAYER_SCORE:
            const updatePlayerList = state.players.map((player, index) => {
                if(index === action.index && (player.score + action.score >= 0)){
                    return {
                        ...player,
                        score: player.score + action.score,
                        updated: `${day}/${month}/${year}`
                    }
                }
                return player
            })
            return {
                ...state,
                players: updatePlayerList
            }
        case PlayerActionTypes.SELECT_PLAYER:

            return {
                ...state,
                selectedPlayerIndex: action.index
            }
        case PlayerActionTypes.RESET_LIST:
            const resetPlayerList = [

            ]
            return {
                ...state,
                players: action.newPlayers
            }
        default:
            return state
    }
}