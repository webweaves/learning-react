import React, {Component} from 'react';
import Ball from './Ball';

import "./Lottery.css";

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
        /*
        * generate a random number and add it to the list of numbers if not a duplicate
        */
        var arr = [];
        while(arr.length < this.props.maxBalls){
            var r = Math.floor(Math.random() * this.props.maxNumber) + 1
            if (arr.indexOf(r) === -1) arr.push(r);
        }

        /*
        * sort the array of numbers
        */
        arr.sort(function(a, b) {
            return a - b;
        });

        this.setState({nums: arr});
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