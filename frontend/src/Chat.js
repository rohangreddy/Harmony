import React from 'react'
import './Chat.css';
import ChatHeader from "./ChatHeader"; 
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifBoxIcon from '@mui/icons-material/GifBox';


function Chat() {
  return (
    <div className="chat">
        <ChatHeader />

        <div className="chat__messages">

        </div>

        <div className="chat__input">
            <AddCircleIcon fontSize="large" />
            <form>
                <input placeHolder={`Message #TESTCHANNEL`} />
                <button className="chat__inputButton" type="submit">
                    Send Message
                </button>
            </form>

            <div className="chat__inputIcons">
                <InsertPhotoIcon />
                <EmojiEmotionsIcon />
                <GifBoxIcon />
            </div>
        </div>
    </div>
  )
}

export default Chat