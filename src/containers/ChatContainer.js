import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import NavBar from "./NavBar";
import "../styles/chat/chat.css";
import "../styles/navbar.css";
import MessageForm from "../components/chat/MessageForm";
import Message from "../components/chat/Message";
import InfoBar from "../components/chat/InfoBar";

export default function ChatContainer() {
  const [log, setLog] = useState([]);
  const [chatroom, setChatroom] = useState("tru baller after hours");
  const [user, setUser] = useState({ username: "test user" });

  useEffect(() => {
    const socket = io("localhost:5000");
    socket.emit("yo");
  }, [log]);

  const handleMessageSubmit = (message) => {
    console.log(message);
    setLog([...log, message]);
  };

  const renderChat = () => {
    return log.map((message, i) => {
      return (
        <Message
          key={i}
          currentUser={user}
          username={message.username}
          content={message.content}
        />
      );
    });
  };

  return (
    <div className="chat-container">
      <NavBar className="navbar" />
      <InfoBar className="info-bar" />
      <div className="chatroom">
        <div className="chat-log">{renderChat()}</div>
        <MessageForm user={user} handleMessageSubmit={handleMessageSubmit} />
      </div>
    </div>
  );
}
