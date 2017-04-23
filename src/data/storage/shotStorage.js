/**
 * Created by dannyyassine on 2017-03-11.
 */
import LocalStorage from './localStorage';

export default class ShotLocalStorage extends LocalStorage {

    get() {
        var objectString = super.get('shot');
        return JSON.parse(objectString);
    }

    set(shot) {
        var shotString = JSON.stringify(shot);
        super.set('shot', shotString);
    }

}