import React, {Component} from 'react';
import Keyboard from "./Keyboard";

class Hangman extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                Hangman!
                <Keyboard/>
            </>
        );
    }

}

export default Hangman;