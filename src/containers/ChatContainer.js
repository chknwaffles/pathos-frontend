import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "../styles/chat/chat.css";
import "../styles/navbar.css";

import NavBar from "./NavBar";
import Message from "../components/chat/Message";
import MessageForm from "../components/chat/MessageForm";
import InfoBar from "../components/chat/InfoBar";

const URL = process.env.REACT_APP_URL || "http://localhost:5000";
//needs to be outside chatcontainer else there is a new call to socket every time this re-renders
const socket = io(URL);

export default function ChatContainer(props) {
  const { user, handleUserInfo } = props;
  const [log, setLog] = useState([]);
  const [chatroom, setChatroom] = useState("");

  useEffect(() => {
    fetchDefaulChatroom();
  }, []);

  ///moved this outside so that the function isnt defined everysingle time
  const fetchDefaulChatroom = async () => {
    try {
      // this  will be in one fetch call eventually as in on the backend we will pull a single chatroom and all of its messages in a join call and send that as the json, for now we are just playing with the default test room
      const chatroomRes = await (
        await fetch(URL + "/chatrooms/defaultchatroom")
      ).json();
      await setChatroom(chatroomRes);
      /// I DONT KNOW IF SHOULD BE or even can await set state lol

      const logRes = await (
        await fetch(URL + "/messages/fetchlog/" + chatroomRes.id)
      ).json();
      await setLog(logRes);
    } catch (err) {
      console.error(err);
    }
  };

  ///TO DO get messages from backend after they are persisted then broadcasted + auto fill chat history
  useEffect(() => {
    socket.on("messageBack", (message) => {
      console.log("log", message);
      setLog([...log, message]);
    });
  }, [log]);

  const handleMessageSubmit = async (message) => {
    message["chatroom_id"] = chatroom.id;
    message["user_id"] = user.id;
    await socket.emit("sendMessage", message);
    await setLog([...log, message])
  };

  /// need to find a way to pass username with the user_id... because the sql return isn't like active record..I cant pull all the user info with it... I have to make a join query...will do more reseach on this.. in the meantime I am sorting by user id
  const renderChat = () => {
    return log.map((message, i) => {
      return (
        <Message
          key={i}
          currentUser={user}
          user_id={message.user_id}
          username={message.username}
          content={message.content}
        />
      );
    });
  };

  return (
    <div className="chat-container">
      <NavBar className="navbar" handleUserInfo={handleUserInfo} />
      <InfoBar className="info-bar" />

      <div className="chatroom">
        <div className="chat-log">
          {renderChat()}
        </div>
        <MessageForm user={user} handleMessageSubmit={handleMessageSubmit} />
      </div>
    </div>
  );
}