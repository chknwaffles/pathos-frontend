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
  const [user, setUser] = useState({});
  /// I think just leave the socket here is fine... no? then turn it off from the front end when the user logs out or the connection is loss for x amount of time from the backend
  const socket = io(URL);

  useEffect(() => {
    async function fetchDefaulChatroom() {
      try {
        const chatroomRes = await (
          await fetch(URL + "/chatrooms/defaultchatroom")
        ).json();
        setChatroom(chatroomRes);
      } catch (err) {
        console.error(err);
      }
    }
    fetchDefaulChatroom();
  }, []);

  useEffect(() => {
    socket.on("messageBack", (message) => {
      setLog([...log, message]);
    });
  }, [log]);

  const handleMessageSubmit = async (message) => {
    message["chatroom_id"] = chatroom.id;
    message["user_id"] = user.id;
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

  const fetchDefaultUserOne = async () => {
    try {
      const userRes = await (await fetch(URL + "/users/defaultuser/1")).json();
      setUser(userRes);
    } catch (err) {
      console.error(err);
    }
  };

  const renderSocketTesting = () => {
    if (user.username == "default user 1") {
      return (
        <>
          <InfoBar className="info-bar" URL={URL} activeUser={true} />
          <div className="chatroom">
            <div className="chat-log">{renderChat()}</div>
            <MessageForm
              user={user}
              handleMessageSubmit={handleMessageSubmit}
            />
          </div>
        </>
      );
    } else
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "30%",
            justifyContent: "space-evenly",
          }}
        >
          {" "}
          <button
            style={{
              height: "100%",
              width: "50%",
              fontSize: "5em",
            }}
            onClick={() => fetchDefaultUserOne()}
          >
            {" "}
            CLICK ME 2 FETCH DAT USER{" "}
          </button>{" "}
        </div>
      );
  };

  return (
    <div className="chat-container">
      <NavBar className="navbar" />

      {renderSocketTesting()}
    </div>
  );
}
