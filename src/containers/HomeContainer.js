/**
 * Created by dannyyassine on 2017-04-23.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {store} from './../store/scoreboardStore'

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        store.subscribe(() => {
            console.log(store);
        })
    }

    render() {
        const { dispatch } = this.props
        return(
            <div>
                HomeContainer
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
    }
);

export default connect(mapStateToProps)(HomeContainer);