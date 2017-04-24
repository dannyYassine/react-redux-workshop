/**
 * Created by dannyyassine on 2017-04-23.
 */
import BasePresenter from '../presenters/BasePresenter'
import GetShots from '../domain/interactors/getShots'

export default class DribbbleListPresenter extends BasePresenter {
    constructor(getShots) {
        super()
        this.getShotsInteractor = getShots
    }
    onLoad() {
        this.getShotsInteractor.getShots(1, (shots) => {
            this.view.handleShots(shots)
        })
    }
}