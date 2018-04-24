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

        <Button />
      </div>
    );
  }
}

export default App;


class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {count: 0};

  }

  render(){
    return <button onClick={(e) => this.activateLazers(e, 2)}>Activate</button>
  }

  activateLazers(e,num){
    alert(num);
  }  

  activateArrow = () => {
      alert();
  }
}