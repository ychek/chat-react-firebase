import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
        this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);

        this.state = {
            userMessage: '',
            messages: [],
        }

    }

    handleEnterKeyPress(event) {

        if (event.key === 'Enter') {
            this.postUserMsg();
            // clear the text area after submitting
            this.setState({
                userMessage: ''
            })


        }

    }

    scrollToBottom = () => {
        const node = ReactDOM.findDOMNode(this.messagesEnd);
        node.scrollIntoView({ behavior: "smooth" });
    };

    updateUserMsg(event) {
        this.setState({
            userMessage: event.target.value
        })
    }

    postUserMsg() {
        const username = this.props.username;
        const newMsgToBePosted = {
            name: username,
            msg: this.state.userMessage,
            timestamp: Date.now()
        };

        if (newMsgToBePosted.msg.trim()) {
            //prevent sending empty messages or with only whitespaces
            firebase.database().ref('messages/' + this.state.messages.length).set(newMsgToBePosted);
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
        });
        this.scrollToBottom();

    }

    componentDidUpdate(){
        this.scrollToBottom();

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
                        {/*empty div for the auto scrolling mechanism */}
                        <div style={{ float:"left", clear: "both" }}
                             ref={(el) => { this.messagesEnd = el; }} />
                    </div>



                    <div className="Usertext-box">
                        <textarea value={this.state.userMessage} placeholder="Send a message..." onChange={this.updateUserMsg} onKeyPress={this.handleEnterKeyPress} className="textbox"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
