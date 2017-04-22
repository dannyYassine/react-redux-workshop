/**
 * Created by dannyyassine on 2017-04-22.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    return (
        <div className="counter" >
            <button
                className="counter-action decrement"
                onClick={() => props.updatePlayerScore(props.index, -1)}
            >
                -
            </button>
            <div className="counter-score"> {props.score} </div>
            <button
                className="counter-action increment"
                onClick={() => props.updatePlayerScore(props.index, 1)}
            >
                +
            </button>
        </div>
    );
};

Counter.propTypes = {
    index: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
};

export default Counter;
