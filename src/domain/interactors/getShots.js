/**
 * Created by dannyyassine on 2017-03-13.
 */

import {DribbbleWebService} from './../../data/network/dribbbleWebService';

export default class GetShots {

    constructor(shotStorage) {
        this.shotStorage = shotStorage;
    }

    getCachedShot(callback = () => {}) {
        let shot = this.shotStorage.get();
        if (shot) {
            this.getShotWithId(shot.id, callback);
        } else {
            this.getRandomShot(callback);
        }
    }

    getShots(page = 1, callback = () => {}) {

        var webService = new DribbbleWebService();
        webService
            .setShotEndpoint()
            .setPage(page)
            .setPerPage(100)
            .setSort(DribbbleWebService.Sort.RECENT)
            .execute((json) => {
                let shots = json;
                callback(shots, null);
            }, (error) => {
                callback(null, error);
            });

    }

    getShotWithId(shotId, callback = () => {}) {

        var webService = new DribbbleWebService();
        webService
            .setShotEndpoint()
            .setPathId(shotId)
            .execute((json) => {
                callback(json, null);
                this._handleShot(json);
            }, (error) => {
                callback(null, error);
            });
    }

    getRandomShot(callback = () => {}) {
        var webService = new DribbbleWebService();
        webService
            .setShotEndpoint()
            .setPerPage(100)
            .setSort(DribbbleWebService.Sort.RECENT)
            .execute((json) => {

                let shot = json[Math.floor(Math.random() * json.length)];
                callback(shot, null);
                this._handleShot(shot);

            }, (error) => {
                callback(null, error);
            });
    }

    _handleShot(shot) {
        this.shotStorage.set(shot);
    }

}