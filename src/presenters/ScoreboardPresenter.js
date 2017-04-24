/**
 * Created by dannyyassine on 2017-04-24.
 */
import BasePresenter from './BasePresenter';

export default class ScoreboardPresenter extends BasePresenter {

    onRefreshData() {
        fetch('http://localhost:3002/users').then((response) => {
            return response.json()
        }).then((data) => {
            this.view.handlePlayers(data)
        })
    }
}