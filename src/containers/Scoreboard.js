import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';
import { PlayerActionCreators } from '../actions/playerActionCreators';

class Scoreboard extends Component {

    render() {

        const { dispatch, players } = this.props;
        const playerActions = PlayerActionCreators(dispatch);

        const playerComponents = players.map((player, index) => (
            <Player
                index={index}
                name={player.name}
                score={player.score}
                key={player.id}
                updatePlayerScore={playerActions.updatePlayerScore}
                removePlayer={playerActions.removePlayer}
            />
        ));

        return (
            <div className="scoreboard">
                <Header players={players} />
                <div className="players">
                    {playerComponents}
                </div>
                <AddPlayerForm addPlayer={playerActions.addPlayer} />
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