import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import "./App.css";

// function to shuffle friend cards 
function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

//Set "this.state" of app class
class App extends Component {
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    winLoss: "",
    clicked: [],
  };

//handle click events
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

//handle new score increment and update state
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      winLoss: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ winLoss: "You win!" });
    }
    this.handleShuffle();
  };

//handle reset for new game
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      winLoss: "You Lose!",
      clicked: []
    });
    this.handleShuffle();
  };

//function to handle shuffle friend cards
  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="The Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          winLoss={this.state.winLoss}
        />

        <Title>
          <h2>Instructions:</h2> Try to click on each character, but don't hit any duplicates!!!
        </Title>

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;