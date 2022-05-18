import React, { Component } from 'react';
import Signin from './signin';
import Content from './content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signin></Signin>
        <Content></Content>
      </div>
    );
  }
}

export default App;