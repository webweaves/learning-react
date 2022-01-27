import React, {Component} from 'react';

class Keyboard extends Component {
    constructor(props) {
        super(props)
    }

    handleGuess = () => {

    }

    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button key={ltr}
                value={ltr}
                onClick={this.handleGuess}
            >
                {ltr}
            </button>
        ));
    }

    render() {
        return (
            <div>
                <h1>Hangman keyboard</h1>
                <p className="hangman-buttons">{this.generateButtons()}</p>
            </div>
        );
    }

}

export default Keyboard;