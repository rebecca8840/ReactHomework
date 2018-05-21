import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import Headerbar from "./Components/Headerbar";
import Game from "./Components/Game";
import Wrapper from "./Components/Wrapper";
import Flower from "./Flowers.json";
import './App.css';



class App extends Component {

  state = {
    Flower: Flower,
    Notice: "Click an image to begin.",
    highScore: 0,
    score: 0
  };

  setClick = id => {
    let currentIndex = this.state.Flower.findIndex(function(Flower){
        return (id === Flower.id)
    });

    if(this.state.Flower[currentIndex].guessed === "no"){
      let newImages = Flower.slice(0);
      newImages[currentIndex].guessed = "yes";

      if(this.state.score > this.state.highScore){
        this.setState({
          score: this.state.score +1,
          highScore: this.state.score +1,
          Flower: newImages,
          Notice: "Correct! Click another image."
        });
      }
      else{
        this.setState({
          score: this.state.score +1,
          highScore: this.state.highScore,
          Flower: newImages,
        });
      }


      this.setState({
        Flower: Flower.sort(function(a, b){return 0.5 - Math.random()})
      });
    } else {
      if(this.state.score > this.state.highScore){
        this.setState({
          Flower: Flower,
          highScore: this.state.score,
          score: 0,
          Notice: "Oh no! Click another image to start restart."
        });
      }
      else{
        this.setState({
          Flower: Flower,
          bestScore: this.state.bestScore,
          score: 0,
          gameNotice: "Oh no! Click another image to restart."
        });
      }
      for(let i = 0; i < Flower.length; i++){
        Flower[i].guessed = "no";
      }
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <Navbar
            Notice= {this.state.gameNotice}
            score= {this.state.score}
            highScore={this.state.highScore}
        />

        <Headerbar />
        <Wrapper>
          {this.state.Flower.map(Flower => (
            <Game
              setClick={this.setClick}
              id={Flower.id}
              key={Flower.id}
              name={Flower.name}
              image={Flower.image}
            />
        ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;