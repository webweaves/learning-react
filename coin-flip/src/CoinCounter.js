import React, {Component} from 'react';
import head from "./coins/head.jpg";
import tail from "./coins/tail.jpg";
import Coin from "./Coin";
import { choice } from "./helpers.js";

class CoinCounter extends Component {

    static defaultProps = {
        coins: [
            {side: "heads", iimg: head},
            {side: "tails", iimg: tail}
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            currentCoin: null,
            numberOfFlips: 0,
            numberOfHeads:0,
            numberOfTails:0,
        }
    }

    flipCoin = () => {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currentCoin: newCoin,
                numberOfFlips: st.numberOfFlips + 1,
                numberOfHeads: st.numberOfHeads + (newCoin.side === "heads" ? 1 : 0),
                numberOfTails: st.numberOfTails + (newCoin.side === "tails" ? 1 : 0)                
            };
        })
    }

    handleClick = (e) => {
        this.flipCoin();
    }

    render() {
        return ( 
            <div className="CoinCounter">
                <h2>Lets flip a coin</h2>
                {this.state.currentCoin && <Coin info={this.state.currentCoin}/>}
                <p>Out of {this.state.numberOfFlips} flips {this.state.numberOfHeads} are heads and {this.state.numberOfTails} are tails</p>
                <button onClick={this.handleClick}>Flip</button> 
            </div>
        )
    }
}

export default CoinCounter;