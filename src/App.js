import React, { Component } from 'react';
import Message from './Message'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //real object structure
            // messages : [
            //     {'name': 'user1', 'msg': 'Hello', 'timestamp': Date.now() },
            //     {'name': 'user2', 'msg': 'Helloooo', 'timestamp': Date.now()},
            //     {'name': 'user3', 'msg': 'Hello text 3', 'timestamp': Date.now()},
            //     {'name': 'user4', 'msg': 'Hello text4', 'timestamp': Date.now()},
            // ],

            // simple object for debug
            messages : [
                'helllo message',
                'other message'
            ],
        }

    }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
            Hello {this.props.username} welcome to our chatroom!
        </p>
          <div className="Chat-box">
              <div className="Messages-box">
                  {
                      this.state.messages.map((msg, idx) =>
                           <Message key={idx} usermsg={msg} />
                      )
                  }
              </div>
              <div className="Usertext-box">
                  <textarea className="textbox"/>
                  <button>Post</button>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
