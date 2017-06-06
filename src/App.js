import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
            Hello {this.props.username} welcome to our chatroom!
        </p>
          <div className="Chat-box">
              <div className="Messages-box">
                  <p><span>user1 :</span> text1</p>
                  <p>user2 : text2</p>
                  <p>user3 : text3</p>
                  <p>user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3user3 : text3</p>
              </div>
              <div className="Usertext-box">
                  <textarea className="textbox"/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
