/**
 * Created by dannyyassine on 2017-04-23.
 */
import React, { Component } from 'react';
import {
    Redirect,
} from 'react-router-dom'
import PropTypes from 'prop-types';
import LocalStateDataManager from '../middlewares/persistStateLocalManager'

export default class LoginForm extends Component {
    state = {
        redirectToReferrer: false
    }

    constructor(props) {
        super(props)
    }

    login = () => {
        this.setState({
            redirectToReferrer: true
        })
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state
        console.log(this.props, from)
        if (redirectToReferrer) {
            LocalStateDataManager.saveToken('my_super_safe_token')
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <div>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}