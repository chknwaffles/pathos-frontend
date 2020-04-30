import React from "react";

import "../../styles/chat/message.css"

export default function Message({ currentUser, user_id, username, content }) {
  let userMessage = false;

  if (currentUser.id === user_id) {
    userMessage = true;
  }

  const renderTimeStamp = () => {
    // this sill be changed to createdAt ..once I get the sockets/db hooked up...just proof of concept for now
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    return dateTime;
  };

  return (
    <p className={userMessage ? "message-user" : "message-others"}>
      <span> {username} </span>
      <span className="message-body">
        {content}
      </span>
      <br />
      <span>@ {renderTimeStamp()}</span>
    </p>
  );
}