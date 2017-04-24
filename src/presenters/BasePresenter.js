/**
 * Created by dannyyassine on 2017-04-23.
 */

export default class BasePresenter {
    bind(component) {
        this.view = component
    }
    onLoad() {}
}