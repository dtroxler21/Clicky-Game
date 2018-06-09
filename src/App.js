import React, { Component } from 'react';
import Card from './components/Card/Card.js';
import Wrapper from './components/Wrapper/Wrapper.js';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import {shows} from './images/shows.js';
const shuffle = require('shuffle-array');

class App extends Component {
  state = {
    shows,
    score: 0,
    showsClicked: [],
    highScore: 0
  }

  clicked = id => {
    return this.state.showsClicked.includes(id);
  };

  handleClick = id => {
    shuffle(this.state.shows);
    if (!this.clicked(id)) {
      this.setState({score: this.state.score + 1});
      if (this.state.score === 12) {
        this.setState({highScore: this.state.score});
        this.reset();
      }
      const newClick = this.state.showsClicked.concat(id);
      this.setState({showsClicked: newClick});
    } else {
        this.setState({highScore: this.state.score});
        this.reset();
    }
  };

  reset = () => {
    this.setState({showsClicked: []});
    this.setState({score: 0});
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron>
            <h1>The Greatest Era of TV Shows!</h1>
            <h1>Click each picture only once!</h1>
            <h1>Score: {this.state.score} High Score: {this.state.highScore}</h1>
        </Jumbotron>
        {this.state.shows.map(show => (
          <Card
            onClick={this.handleClick}
            id={show.id}
            key={show.id}
            name={show.name}
            img={show.img}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
