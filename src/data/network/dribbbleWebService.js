/**
 * Created by dannyyassine on 2017-03-14.
 */

import {HttpService} from './httpService';

/**
 * 
 */
class DribbbleWebService extends HttpService {

    constructor() {
        super();
        this.addParameter('access_token', this.accessToken);
        this.url = `https://api.dribbble.com/v1`;
    }

    get accessToken() {
        return "9cc6c5a89983f37524e9c6d9536c033e03c778687dbb388d0f14ea7bb2595694";
    }

    setShotEndpoint() {
        this.url += `/shots`;
        this.GET();
        return this;
    }

    setPathId(pathId) {
        this.url += `/${pathId}`;
        return this;
    }

    setList(list) {
        this.addParameter(Arguments.LIST, list);
        return this;
    }

    setTimeframe(timeframe) {
        this.addParameter(Arguments.TIMEFRAME, timeframe);
        return this;
    }

    setSort(sort) {
        this.addParameter(Arguments.SORT, sort);
        return this;
    }

    setPage(pageNumber) {
        this.addParameter('page', pageNumber);
        return this;
    }

    setPerPage(perPage) {
        this.addParameter('per_page', perPage);
        return this;
    }
}

const Arguments = {
    LIST: 'list',
    TIMEFRAME: 'timeframe',
    SORT: 'sort'
};

const List = {
    ANIMATED: 'animated',
    ATTACHMENTS: 'attachments',
    DEBUTS: 'debuts',
    PLAYOFFS: 'playoffs',
    REBOUNDS: 'rebounds',
    TEAMS: 'teams'
};
const Timeframe = {
    WEEK: 'week',
    MONTH: 'month',
    YEAR: 'year',
    EVER: 'ever'
};
const Sort = {
    COMMENTS: 'comments',
    RECENT: 'recent',
    VIEWS: 'views'
};
DribbbleWebService.List = List;
DribbbleWebService.Timeframe = Timeframe;
DribbbleWebService.Sort = Sort;

export {DribbbleWebService, List, Timeframe, Sort};