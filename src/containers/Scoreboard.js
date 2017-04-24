import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';
import { PlayerActionCreators } from '../actions/playerActionCreators';
import {store} from './../store/scoreboardStore'
import PlayerDetail from '../components/PlayerDetail'
import BaseComponent from '../base/BaseComponent';

class Scoreboard extends BaseComponent {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    refreshData = (e) => {
        this.presenter.onRefreshData()
    }

    render() {

        const { dispatch, players, selectedPlayerIndex } = this.props;
        const playerActions = PlayerActionCreators(dispatch);

        const playerComponents = players.map((player, index) => (
            <Player
                index={index}
                name={player.name}
                score={player.score}
                key={player.id}
                updatePlayerScore={playerActions.updatePlayerScore}
                removePlayer={playerActions.removePlayer}
                selectPlayer={playerActions.selectPlayer}
            />
        ));

        let playerDetailComponent = selectedPlayerIndex === -1 ? (<div/>) : (<PlayerDetail selectedPlayer={players[selectedPlayerIndex]}/>)
        return (
            <div className="scoreboard">
                <button onClick={this.refreshData}>RESET</button>
                <Header players={players} />
                <div className="players">
                    {playerComponents}
                </div>
                <AddPlayerForm addPlayer={playerActions.addPlayer} />
                {playerDetailComponent}
            </div>
        );
    }


    // View
    handlePlayers(players) {
        const playerActions = PlayerActionCreators(this.props.dispatch);
        playerActions.resetList(players)
    }

}

Scoreboard.propTypes = {
    players: PropTypes.array.isRequired
};

const mapStateToProps = (state) => (
    {
        players: state.players,
        selectedPlayerIndex: state.selectedPlayerIndex
    }
);

export default connect(mapStateToProps)(Scoreboard);