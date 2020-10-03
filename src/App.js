import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    profile: {}
  };

  async componentDidMount() {
    const response = await fetch('/profiles/kshitiz');
    const body = await response.json();
    this.setState({
      isLoading: false,
      profile: body
    });
  }

  render() {
    const { isLoading, profile } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const profileString = JSON.stringify(profile);
    return <p>{profileString}</p>;
  }
}

export default App;
