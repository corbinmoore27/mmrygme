import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    counter: 0,
    guessed: [],
    hScore: 0
  };
  
  cardClick = id => {
    if ((this.state.guessed).includes(id)) {
      this.setState({counter: 0})
      this.setState({guessed: []})
    } else {(this.state.guessed).push(id);
      this.setState({ counter: this.state.counter + 1 });
      this.highScoreCheck();
      this.randomizeCards();

    }
  };

  randomizeCards = cards => {
    const shuffled = this.state.cards.sort(function() {
      return Math.random() - 0.5;
    })
  };

  highScoreCheck = () => {
    if (this.state.counter >= this.state.hScore) {
      this.setState({hScore: this.state.hScore + 1})
    }
  }
  
  render() {
    return (
      <Wrapper>
        <Title
          counter={this.state.counter}
          hScore={this.state.hScore}>
          The Incredibles Memory Game</Title>
        {this.state.cards.map(card => (
          <MemoryCard
            removeCard={this.removeCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            cardClick={this.cardClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
