import React, { Component } from 'react';
import './App.css';
import Message from './components/Message'
import * as firebase from 'firebase'


class App extends Component {

    constructor() {
        super();
        /* no need of 'props' as param for constructor() and super() because we don't use props inside
         the constructor logic */
        this.updateUserMsg = this.updateUserMsg.bind(this);
        this.postUserMsg = this.postUserMsg.bind(this);

        this.state = {
            userMessage: '',
            messages: [
                // {name: 'user1', msg: 'Hello', timestamp: Date.now() },
                // {name: 'user2', msg: 'Helloooo', timestamp: Date.now()},
                // {name: 'user3', msg: 'Hello text 3', timestamp: Date.now()},
                // {name: 'user4', msg: 'Hello text4', timestamp: Date.now()},
            ],
        }

    }

    updateUserMsg(event) {
        this.setState({
            userMessage: event.target.value
        })
    }

    postUserMsg(event) {
        const username = this.props.username;
        const newMsgToBePosted = {
            id: this.state.messages.length,
            name: username,
            msg: this.state.userMessage,
            timestamp: Date.now()
        };

        if (newMsgToBePosted.msg) { //prevent sending empty messages
            firebase.database().ref('messages/' + newMsgToBePosted.id).set(newMsgToBePosted);
        }


    }


    componentDidMount(){

        firebase.database().ref('messages/').on('value', snap => {

            const dbMessages = snap.val();

            if (dbMessages){
                this.setState({
                    messages: dbMessages
                })
            }
        })
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

                            this.state.messages.map((msg, idx) => {
                                    return (<Message key={idx} userMsg={msg}/>)
                                }
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
