import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import NavBar from "./NavBar";
import "../styles/chat/chat.css";
import "../styles/navbar.css";
import MessageForm from "../components/chat/MessageForm";
import Message from "../components/chat/Message";
import InfoBar from "../components/chat/InfoBar";

const URL = process.env.REACT_APP_URL || "http://localhost:5000";

export default function ChatContainer() {
  const [log, setLog] = useState([]);
  const [chatroom, setChatroom] = useState("");
  const [user, setUser] = useState({ username: "test user" });
  /// I think just leave the socket here is fine... no? then turn it off from the front end when the user logs out or the connection is loss for x amount of time from the backend
  const socket = io(URL);

  useEffect(() => {
    async function fetchDefaultUser() {
      try {
        const userRes = await fetch(URL + "/users/defaultuser");
        console.log(userRes);
        const chatroomRes = await fetch(URL + "/chatrooms/chatrooms");
        console.log(chatroomRes);
      } catch (err) {
        console.error(err);
      }
    }

    fetchDefaultUser();
  }, []);

  useEffect(() => {
    socket.on("messageBack", (message) => {
      setLog([...log, message]);
    });
  }, [log]);

  const handleMessageSubmit = async (message) => {
    message["chatroom"] = chatroom;
    await socket.emit("sendMessage", message, () => {});
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
