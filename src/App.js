import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Headerbar from "./components/Headerbar";
import Game from "./components/Game";
import Wrapper from "./components/Wrapper";
import Memory from "./Memory";


class App extends Component {

  state = { 
            Memory: Memory,
            gameNote: "Click an image to begin!",
            highScore: 0,
            score: 0
          }

  setClick = id => {
    let currentIndex = this.state.Memory.findIndex(function(Memory){
      return (id === Memory.id)
    })

    if (this.state.Memory[currentIndex].guessed === "no") {
      let newImageArray = Memory.slice(0);
      newImageArray[currentIndex].guessed = "yes";

      if (this.state.score > this.state.highScore) {
        this.setState({
          score: this.state.score +1,
          highScore: this.state.score +1,
          Memory: newImageArray,
          gameNote: "Correct! Click another image."
        });
      }
        else { 
          this.setState({
            score: this.state.score +1,
            highScore: this.state.highScore,
            Memory: newImageArray,
            gameNote: "Correct! Click another image."
          });
    }

      this.setState({
        Memory:Memory.sort(function(a, b){return 0.5 - Math.random()})
      });
  } else {
    if (this.state.score > this.state.highScore) {
      this.setState({
        Memory: Memory,
        highScore: this.state.score,
        score: 0,
        gameNote: "Nope! Click another image."
      });
    }
      else{
        this.setState({
          Memory: Memory,
          highScore: this.state.highScore,
          score: 0,
          gameNote: "Nope! Click another image."
        });
      }
      for (let i = 0; i < Memory.length; i++) {
        Memory[i].guessed = "no";
      }
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <Navbar
          gameNote = {this.state.gameNote}
          score = {this.state.score}
          name = {this.state.name}
          highScore = {this.state.highScore}
        />
          <Headerbar />
          <Wrapper>
            {this.state.Memory.map(Memory => (
              <Game 
                setClick = {this.setClick}
                id = {Memory.id}
                key = {Memory.id}
                image = {Memory.image}
                />
            ))}

            </Wrapper>
      </div>
      );
    }
  }

export default App;
