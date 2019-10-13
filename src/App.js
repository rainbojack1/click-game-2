import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import PlayingField from "./components/PlayingField";
import StartOver from "./components/StartOver";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters,
    clicked: [],
    random: [],
    score: 0,
    topScore: 0,
    correct: "",
    showModal: false
  };
  
  componentDidMount(){
    this.setState({random: characters});
  }

  imageClicked = id => {
    if (this.state.clicked.includes(id)) {
      this.setState({correct: "Wrong!"});
      this.setState({showModal: true});
      this.endRound();
    }
    else {
      this.state.clicked.push(id);
      this.setState({correct: "Correct!"});
      this.setState({score: this.state.score + 1});
      this.setState({showModal: false});
    }

    this.shuffleImages();
  }

  shuffleImages = () => {
    const copy = this.state.characters;

    let i = copy.length;
    let j = 0;
    let temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }

    this.setState({random: copy});
  }

  endRound = () => {
    this.setState({score: 0});
    this.setState({clicked: []});
    
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score});
    }
  }

  render() {
    return (
      <>
        <Navbar score={this.state.score} topScore={this.state.topScore} correct={this.state.correct}></Navbar>
        <Jumbotron></Jumbotron>
        <StartOver  showModal={this.state.showModal} imageClicked={this.imageClicked}></StartOver>
        <PlayingField characters={this.state.random} imageClicked={this.imageClicked}></PlayingField>
        
      </>
    );
  }
}

export default App;
