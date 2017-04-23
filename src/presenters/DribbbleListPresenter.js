/**
 * Created by dannyyassine on 2017-04-23.
 */
import BasePresenter from '../presenters/BasePresenter'
import GetShots from '../domain/interactors/getShots'

export default class DribbbleListPresenter extends BasePresenter {
    onLoad() {
        new GetShots().getShots(1, (shots) => {
            this.component.handleShots(shots)
        })
    }
}