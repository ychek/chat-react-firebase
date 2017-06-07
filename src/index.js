import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase'


let config = {
    apiKey: "AIzaSyAq6GLAZRaxTamJP7PWycWp3akQj0AUkGQ",
    authDomain: "chat-4bbc0.firebaseapp.com",
    databaseURL: "https://chat-4bbc0.firebaseio.com",
    projectId: "chat-4bbc0",
    storageBucket: "chat-4bbc0.appspot.com",
    messagingSenderId: "10795783710"
};

// Initialize Firebase
firebase.initializeApp(config);


function getUserName() {
    const person = prompt("Please choose a username", "username");
    if (person) {
       return person;
    }
    //Generate a username if not given
    else {
        const randomNumber = getRandomInt(0, 1000);
        return "user" + randomNumber;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let person = getUserName();


ReactDOM.render(<App username={person} />, document.getElementById('root'));
registerServiceWorker();
