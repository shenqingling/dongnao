import React, { Component } from 'react';
import TimeDisplay from './TimeDisplay';
import './App.css';

class App extends Component {
  render() {
    return (<div className="app">
                <TimeDisplay time={1000} />
            </div>
    );
  }
}

export default App;
