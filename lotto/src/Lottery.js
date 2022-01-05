import React, {Component} from 'react';
import Ball from './Ball';

class Lottery extends React.Component {

    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNumber: 59
    }

     constructor(props) {
        super(props);
        this.state = {nums: Array.from({length: this.props.maxBalls})};
    }

    generate = () => {
        this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNumber) + 1
            )
        }))
    }

    newNumbers = () => {
        this.generate();
    };

    render() {
        return (
            <section className="Lottery"> 
            <div>
                {this.state.nums.map(n => <Ball number={n}/>)}
            </div>
            <button onClick={this.newNumbers}>Click</button>
            
            </section>
        )
    }
}

export default Lottery;