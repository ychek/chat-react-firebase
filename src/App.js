import React, { Component } from 'react';
import './App.css';
import Message from './components/Message'


class App extends Component {

    constructor() {
        /* no need of 'props' as param in the constructor() and super() (because we don't use props inside
         the constructor logic) */
        super();
        this.updateUserMsg = this.updateUserMsg.bind(this);
        this.postUserMsg = this.postUserMsg.bind(this);

        this.state = {
            userMessage : '',
            //real object structure
            // messages : [
            //     {name: 'user1', msg: 'Hello', timestamp: Date.now() },
            //     {name: 'user2', msg: 'Helloooo', timestamp: Date.now()},
            //     {name: 'user3', msg: 'Hello text 3', timestamp: Date.now()},
            //     {name: 'user4', msg: 'Hello text4', timestamp: Date.now()},
            // ],

            // simple object for debug
            messages : [
                // 'helllo message',
                // 'other message'
            ]
        }

    }

    updateUserMsg(event) {
        this.setState({
            userMessage: event.target.value
        })
    }

    postUserMsg(event) {
        const username = this.state.username;
        // const newMsgToBePosted = {
        //     name: username,
        //     msg: this.state.userMessage,
        //     timestamp: Date.now()
        // };

        console.log(username + " clicked submit");
        let allMessages = Object.assign([], this.state.messages);

        allMessages.push(this.state.userMessage); // Simple msg for debug
        // allMessages.push(newMsgToBePosted); // real object
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
                        <textarea onChange={this.updateUserMsg} className="textbox"/>
                        <button onClick={this.postUserMsg}>Post</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
