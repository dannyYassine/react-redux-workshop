/**
 * Created by dannyyassine on 2017-04-22.
 */
import * as PlayerActions from '../actions/player';

// instead of using bindActionCreators
export const PlayerActionCreators = (dispatch) => {
    return {
        addPlayer : (name) => {
            dispatch(PlayerActions.addPlayer(name))
        },
        removePlayer : (index) => {
            dispatch(PlayerActions.removePlayer(index))
        },
        updatePlayerScore : (index, score) => {
            dispatch(PlayerActions.updatePlayerScore(index, score));
        },
        selectPlayer : (index) => {
            dispatch(PlayerActions.selectPlayer(index))
        },
        resetList: (newPlayers) => {
            dispatch(PlayerActions.resetList(newPlayers))
        }
    }
}