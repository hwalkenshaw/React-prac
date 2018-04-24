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

        <Form />
      </div>
    );
  }
}

export default App;

class Form extends Component{
  constructor(props){
    super(props)

    this.state = {value : 'Initialized' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({value : e.target.value.toUpperCase()})
  }

  render(){
    return (
    <form>
       <textarea  value={this.state.value} onChange={this.handleChange}/>
    </form>
    );
  }
}


class Select extends Component{



  render(){
    return (
      <select>
        props.map((num) => <option value={num}>num</option>)
      </select>
    );
  }
}