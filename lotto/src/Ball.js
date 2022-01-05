import React, {Component} from 'react';
import "./Ball.css";

class Ball extends React.Component {

    render() {
        return ( 
            <div className="Ball">{this.props.number}</div>
        )
    }
}

export default Ball;