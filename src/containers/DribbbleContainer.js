/**
 * Created by dannyyassine on 2017-04-23.
 */
import React, { Component } from 'react'
import BaseComponent from '../base/BaseComponent'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {store} from './../store/scoreboardStore'

class DribbbleContainer extends BaseComponent {
    constructor(props) {
        super(props)
        store.subscribe(() => {
            console.log(store);
        })
        this.state = {
            shots: []
        }
    }

    render() {
        const { dispatch } = this.props
        const shotsComponent = this.state.shots.map((shot, index) => {
            return(
                    <img src={shot.images.normal}/>
            )
        })
        return(
            <div>
                {shotsComponent}
            </div>
        )
    }

    // ViewInput
    handleShots(shots) {
        this.setState({
            shots: shots
        })
    }
}

const mapStateToProps = (state) => (
    {
    }
)

export default connect(mapStateToProps)(DribbbleContainer)