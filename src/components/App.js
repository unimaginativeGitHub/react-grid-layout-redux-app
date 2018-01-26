import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Flexable from './flexable';
import Palette from './palette';
import ConnectedDashboard from '../containers/ConnectedDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Form Builder Config Tool</h1>
        </header>
        <Flexable>
          <ConnectedDashboard flex={0.8} />
          <Palette flex={0.2} />
        </Flexable>
      </div>
    );
  }
}

export default App;
