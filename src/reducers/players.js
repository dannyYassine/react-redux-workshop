/**
 * Created by dannyyassine on 2017-04-22.
 */
import * as PlayerActionTypes from '../actionTypes/player';
import LocalStateDataManager from '../middlewares/persistStateLocalManager';

const initialState = LocalStateDataManager.loadState();

function getRandomArbitrary(min=0, max=1000000) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default function PlayerReducer(state=initialState, action) {

    switch(action.type) {

        case PlayerActionTypes.ADD_PLAYER:
            let foundPlayer = false
            for (const index in state) {
                console.log(state[index])
                if (state[index].name === action.name) {
                    foundPlayer = true
                    break
                }
            }

            if (foundPlayer) {return state}

            return [
                ...state,
                {
                    name: action.name,
                    score: 0,
                    id: getRandomArbitrary()
                }
            ];
        case PlayerActionTypes.REMOVE_PLAYER:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case PlayerActionTypes.UPDATE_PLAYER_SCORE:

            return state.map((player, index) => {
                if (index === action.index) {

                    if (player.score === 0 && action.score === -1) { return player; }

                    return {
                        ...player,
                        score: player.score + action.score
                    }
                }
                return player;
            });
        default:
            return state;
    }
}