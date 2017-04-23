/**
 * Created by dannyyassine on 2017-04-22.
 */

export const persistStateToLocalStorageMiddleware = store => next => action => {
    next(action)
    LocalStateDataManager.saveState(store.getState())
}

export default class LocalStateDataManager {
    static saveState(state) {
        localStorage.setItem('store', JSON.stringify(state));
    }

    static loadState() {
        return JSON.parse(localStorage.getItem('store')) || {players:[], selectedPlayerIndex: -1};
    }

    static saveToken(token) {
        localStorage.setItem('token', token);
    }
    static loadToken() {
        return localStorage.getItem('token');
    }
}