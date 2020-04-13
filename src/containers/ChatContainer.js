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
  const [user, setUser] = useState("");
  /// I think just leave the socket here is fine... no? then turn it off from the front end when the user logs out or the connection is loss for x amount of time from the backend
  const socket = io(URL);
  /// default function loads in chatroom and the log we can use this logic to render other chat rooms in the future

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
    await socket.emit("sendMessage", message, () => {});
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

  ///button action for fetch default user
  const fetchDefaultUserOne = async () => {
    try {
      const userRes = await (await fetch(URL + "/users/defaultuser/1")).json();
      setUser(userRes);
    } catch (err) {
      console.error(err);
    }
  };
  ///button action for fetch 2nd default user

  const fetchSecondTestUser = async () => {
    try {
      const userRes = await (await fetch(URL + "/users/defaultuser/2")).json();
      setUser(userRes);
    } catch (err) {
      console.error(err);
    }
  };
  //// just a function to test db/socket persistance, im not too comfortable with it yet, will be deleted later
  const renderSocketTesting = () => {
    return user ? (
      <>
        <div className="chatroom">
          <div className="chat-log">{renderChat()}</div>
          <MessageForm user={user} handleMessageSubmit={handleMessageSubmit} />
        </div>
      </>
    ) : (
      <>
        <button onClick={() => fetchDefaultUserOne()}> fetch user 1 </button>{" "}
        <button onClick={() => fetchSecondTestUser()}>fetch user 2</button>
      </>
    );
  };

  return (
    <div className="chat-container">
      <NavBar className="navbar" />
      <InfoBar className="info-bar" />
      {renderSocketTesting()}
    </div>
  );
}
