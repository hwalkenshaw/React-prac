import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    function myname(){
        return "Heiniiii";
    }

    const comment = {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
      },
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
        />
      </div>
    );
  }
}

export default App;

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );

  function formatDate(date) {
    return date.toLocaleDateString();
  }
}


function Avatar(props){
  return  <img className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
  />
}

function UserInfo(props){
  return <div className="UserInfo">
            <Avatar 
                user={props.user}
            />
            <div className="UserInfo-name">
              {props.user.name}
            </div>
          </div>
}