import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';

class Scoreboard extends Component {

    render() {

        const { dispatch, players } = this.props;
        // instead of using bindActionCreators
        const addPlayer = (name) => {
            dispatch(PlayerActionCreators.addPlayer(name))
        }
        const removePlayer = (index) => {
            dispatch(PlayerActionCreators.removePlayer(index))
        }
        const updatePlayerScore = (index, score) => {
            dispatch(PlayerActionCreators.updatePlayerScore(index, score));
        }

        const playerComponents = players.map((player, index) => (
            <Player
                index={index}
                name={player.name}
                score={player.score}
                key={player.id}
                updatePlayerScore={updatePlayerScore}
                removePlayer={removePlayer}
            />
        ));

        return (
            <div className="scoreboard">
                <Header players={players} />
                <div className="players">
                    {playerComponents}
                </div>
                <AddPlayerForm addPlayer={addPlayer} />
            </div>
        );
    }
}

Scoreboard.propTypes = {
    players: PropTypes.array.isRequired
};

const mapStateToProps = (state) => (
    {
        players: state
    }
);

export default connect(mapStateToProps)(Scoreboard);