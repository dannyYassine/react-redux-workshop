/**
 * Created by dannyyassine on 2017-04-22.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    onNameChange = (event) => {
        const name = event.target.value;
        this.setState({ name: name });
    };

    addPlayer = (event) => {
        if (event) event.preventDefault();
        if (this.state.name.length === 0) {return;}

        this.props.addPlayer(this.state.name);
        this.setState({ name: '' });
    };

    render() {
        return (
            <div className="add-player-form">
                <form onSubmit={this.addPlayer}>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                        placeholder="Player Name"
                    />
                    <input type="submit" value="Add Player" />
                </form>
            </div>
        );
    }
}

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerForm;