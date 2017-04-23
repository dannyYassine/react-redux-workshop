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
                <div className="cell-4">
                    <img className="detail-image" key={shot.id} src={shot.images.normal}/>
                </div>
            )
        })
        const initialComponent = this.state.shots.length === 0 ? (<h1>Loading shots...</h1>) : (shotsComponent)
        return(
            <div className="center grid">
                {initialComponent}
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