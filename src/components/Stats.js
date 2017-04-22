/**
 * Created by dannyyassine on 2017-04-22.
 */
import React  from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {
    const playerCount = props.players.length;
    const totalPoints = props.players.reduce(function(total, player) {
        return total + player.score;
    }, 0);

    return (
        <table className="stats">
            <tbody>
            <tr>
                <td>Players:</td>
                <td>{playerCount}</td>
            </tr>
            <tr>
                <td>Total Points:</td>
                <td>{totalPoints}</td>
            </tr>
            </tbody>
        </table>
    )
};

Stats.propTypes = {
    players: PropTypes.array.isRequired,
};

export default Stats;