import React from 'react'
import "./Message.css";
import Avatar from '@mui/material/Avatar';

function Message() {
  return (
    <div className="message">
        <Avatar />
        <div className="message__info">
            <h4>Satoshi
                <span className="message__timestamp">Timestamp</span>
            </h4>
            <p> This is the Message</p>
        </div>
    </div>
  )
}

export default Message