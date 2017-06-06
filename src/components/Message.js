import React from 'react';
import '../App.css';


const Message = (props) => (

    <p>
        <span className="user-name">{props.userMsg.name}: </span>{props.userMsg.msg}
        {/*<span> ({props.userMsg.timestamp})</span>*/}
    </p>
);


export default Message;