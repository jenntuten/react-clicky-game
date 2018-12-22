import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

//let score = 0
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    clicks: 0
  };

  shuffling = () => {
    //Durstenfeld Shuffle Algorithm to shuffle each element
    for (let i = friends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[j]] = [friends[j], friends[i]];
    }
    console.log(friends)
    console.log(this.state.clicks)
    let addClick = this.state.clicks+1
    let userScore = this.state.score+1
    console.log(addClick)
    console.log(userScore)
    this.setState({
      friends: friends,
      score: userScore,
      clicks: addClick
    })
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
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
