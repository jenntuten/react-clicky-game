import React, { Component } from "react";
import TVCard from "./components/TVCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import Status from "./components/Status";
import Instructions from "./components/Instructions";
import cards from "./cards.json";

function shuffle() {
  //console.log('shuffling...')
  //Durstenfeld Shuffle Algorithm to rearrange cards
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    clickedCards: [],
    message: ""
  };

  shuffling = id => {
    //console.log("clicked cards",this.state.clickedCards)
    //console.log("score",this.state.score)
    let clickedCards = this.state.clickedCards;
    let userScore = this.state.score
    console.log(userScore)
    if (clickedCards.includes(id)) {
      this.setState({ clickedCards: [], score: 0, message: "You've already chosen this show!" });
    }
    if (userScore === 9) {
      this.setState({ clickedCards: [], score: 0, message: "You win!" })
    }
    else {
      clickedCards.push(id);
      shuffle();
      this.setState({
        cards: cards,
        score: userScore + 1
      })
    }
  };
  //This resets the game, but happens before the user can see the "You win" or "You've already chosen this show" message.
  //Created a reset button to handle this.
  reset = () => {
    this.setState(
      {
        cards,
        score: 0,
        clickedCards: [],
        message: ""
      }
    )
  }

  // Map over this.state.cards and render a TVCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>React Clicky Game</Title>
        <Instructions />
        <button onClick={this.reset}>Reset</button>
        <Score>Score: {this.state.score}</Score>
        <Status>{this.state.message}</Status>
        {this.state.cards.map(friend => (
          <TVCard
            shuffling={this.shuffling}
            id={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
