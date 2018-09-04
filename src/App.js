import React, { Component } from 'react';
import './App.css';
import logo from './Star_Wars_logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: []
    }
  }

  render() {
    return (
      <div>
        <h1>All About</h1>
        <img className="logo" src={logo} alt="logo" />
      </div>
    );
  }
}

export default App;
