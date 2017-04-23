/**
 * Created by dannyyassine on 2017-03-11.
 */

export default class LocalStorage {

    constructor() {
        this.localStorage = localStorage;
    }

    get(key) {
        return this.localStorage.getItem(key);
    }

    set(key, value) {
        this.localStorage.setItem(key, value);
    }

}