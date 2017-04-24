/**
 * Created by dannyyassine on 2017-04-22.
 */
import * as PlayerActionTypes from '../actionTypes/player';

export const addPlayer = name => {
    return {
        type: PlayerActionTypes.ADD_PLAYER,
        name
    }
};

export const removePlayer = index => {
    return {
        type: PlayerActionTypes.REMOVE_PLAYER,
        index
    }
};

export const updatePlayerScore = (index, score) => {
    return {
        type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
        index,
        score
    }
};

export const selectPlayer = (index) => {
    return {
        type: PlayerActionTypes.SELECT_PLAYER,
        index
    }
};

export const resetList = (newPlayers) => {
    return {
        type: PlayerActionTypes.RESET_LIST,
        newPlayers
    }
}
