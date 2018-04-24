import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <ul>
          <List/>
        </ul>

      </div>
    );
  }
}

export default App;

class List extends Component{

  constructor(props){
    super(props)

    this.state = {numbers : [0,1,2,4,5]}
  }

  render(){
    return <ul>
              {this.state.numbers.map((num) => 
                <li key={num}>{num * 2}</li>
              )}
            </ul>
  }
}