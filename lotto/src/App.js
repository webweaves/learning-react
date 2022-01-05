import logo from './logo.svg';
import './App.css';
import Lottery from './Lottery';

import Ball from "./Ball.js";

function App() {
  return (
    <div className="App">
      <Lottery maxBalls="6" maxNumber="59" bonusBalls="1"/>
      <Lottery maxBalls="9" maxNumber="56" bonusBalls="1"/>
    </div>
  );
}

export default App;
