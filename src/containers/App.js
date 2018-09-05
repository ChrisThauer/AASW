import React, { Component } from 'react';
import './App.css';
import logo from './Star_Wars_logo.png';
import CardList from '../components/CardList';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
      .then(res => res.json())
      .then(films => this.setState({films: films.results}))
  }

  render() {
    const sortedFilms = this.state.films.sort((a, b) => {
      return a.episode_id - b.episode_id;
    });

    if (this.state.films.length === 0) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <h1>All About</h1>
        <img className="logo" src={logo} alt="logo" />
        <CardList films={sortedFilms} />
      </div>
    );
  }
}

export default App;
