/**
 * Created by dannyyassine on 2017-04-22.
 */
import React  from 'react';
import PropTypes from 'prop-types';

const PlayerDetail = (props) => {

    let selectedPlayer = props.selectedPlayer
    if (!selectedPlayer) {return (<div/>)}

    return (
        <div>
            <h3>{selectedPlayer.name}</h3>
            <ul>
                <li>
                    <span>Score: </span>
                    {selectedPlayer.score}
                </li>
                <li>
                    <span>Created: </span>
                    {selectedPlayer.created}
                </li>
                <li>
                    <span>Updated: </span>
                    {selectedPlayer.updated}
                </li>
            </ul>
        </div>
    );
}

PlayerDetail.propTypes = {
    selectedPlayer: PropTypes.object
}

export default PlayerDetail