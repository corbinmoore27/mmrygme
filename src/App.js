import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards,
    counter: 0,
    guessed: [],
    hScore: 0
  };
  
  cardClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ counter: this.state.counter + 1 });
  };

  highScoreCheck = () => {
    if (this.state.counter > this.state.hScore) {
      this.setState({hScore: this.state.counter})
    }
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
          counter={this.state.counter}
          hScore={this.state.hScore}>
          Memory Game</Title>
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
