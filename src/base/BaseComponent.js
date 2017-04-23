/**
 * Created by dannyyassine on 2017-04-23.
 */
import { Component } from 'react';
import BasePresenter from '../presenters/BasePresenter'

export default class BaseComponent extends Component {
    constructor(props) {
        super(props)
        this.presenter = props.presenter || new BasePresenter()
        this.presenter.bind(this)
    }
}