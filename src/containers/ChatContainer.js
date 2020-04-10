import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import "../styles/chat/chat.css";
import MessageForm from "../components/chat/MessageForm";
import Message from "../components/chat/Message";

export default function ChatContainer() {
  const [log, setLog] = useState([]);
  const [chatroom, setChatroom] = useState("tru baller after hours");
  const [user, setUser] = useState("ballest fool in da street");

  // useEffect(() => {
  //   const socket = io("localhost:5000");
  //   socket.emit("yo");
  // }, [log]);

  const handleMessageSubmit = (message) => {
    console.log(message)
    setLog([...log, message]);
  };

  const renderChat = () => {
    return log.map((message, i) => {
      return <Message key={i} username={message.username} content={message.content} />
    })
  }

  return (
    <div className="chat-container">
      <div className="message-container">
        <div className="chat">
          {renderChat()}
        </div>
        <MessageForm
          handleMessageSubmit={handleMessageSubmit}
        />
      </div>

      <div className='nav-panel'>
        Nav Panel
      </div>
    </div>
  );
}
