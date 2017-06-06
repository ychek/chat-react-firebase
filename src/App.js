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
            name: username,
            msg: this.state.userMessage,
            timestamp: Date.now()
        };

        console.log(username + " clicked submit");

        firebase.database().ref('messages/'+newMsgToBePosted.name).set(newMsgToBePosted);


        // let allMessages = Object.assign([], this.state.messages);
        //
        // allMessages.push(newMsgToBePosted);
        //
        // if (this.state.userMessage) { //prevent sending empty messages
        //     // update the state with the new user message added
        //     this.setState({messages: allMessages})
        //}
    }


    componentDidMount(){

        firebase.database().ref('messages/').on('value', (snapshot) => {

            const dbMessages = snapshot.val();

            console.log(dbMessages);
            // if (dbMessages){
            //     this.setState({
            //         messages: dbMessages
            //     })
            // }
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
