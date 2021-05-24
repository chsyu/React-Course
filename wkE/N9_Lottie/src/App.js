import React, { Component } from 'react';
import './App.css';
import UncontrolledLottie from './components/UncontrolledLottie';
import ControlledLottie from './components/ControlledLottie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>REACT LOTTIES</h1>
        <div className="lotties">
          <UncontrolledLottie />
          <ControlledLottie />
        </div>
      </div>
    );
  }
}

export default App;
