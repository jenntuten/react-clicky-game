import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import Status from "./components/Status";
import friends from "./friends.json";

function shuffle() {
  //console.log('shuffling...')
  //Durstenfeld Shuffle Algorithm to rearrange cards
  for (let i = friends.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [friends[i], friends[j]] = [friends[j], friends[i]];
  }
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
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
      console.log("You've already chosen this character!")
      this.setState({ clickedCards: [], score: 0, message: "You've already chosen this character!" });
      return;
    }
    else {
      clickedCards.push(id);
      shuffle();
      this.setState({
        friends: friends,
        score: userScore+1
      })
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>React Clicky Game</Title>
        <Score>Score: {this.state.score}</Score>
        <Status>{this.state.message}</Status>
        {this.state.friends.map(friend => (
          <FriendCard
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
