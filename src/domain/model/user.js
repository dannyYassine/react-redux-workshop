/**
 * Created by dannyyassine on 2017-03-05.
 */

export default class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    printUser() {
        console.log(`${this.name} ${this.email}`);
    }

    get name() {
    }

    set name(value) {

    }

    set email(value) {
        if (this._checkEmail()) {
        }
    }

    get email() {

    }

    _checkEmail() {
        return true;
    }

}