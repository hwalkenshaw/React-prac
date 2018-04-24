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

        <Clock />

        <Clock />

        <Clock />
      </div>
    );
  }
}

export default App;


class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date : new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillMount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return <div>
               <h1> Whoooo clock!</h1>
               <h2> The time is <FormattedDate date={this.state.date} />  </h2>
          </div>
  }
}

function FormattedDate(props){
  return <h2>It is {props.date.toLocaleTimeString()}</h2>
}