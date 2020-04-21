import React from "react";

import "../../styles/chat/message.css"

export default function Message({ currentUser, user_id, username, content }) {
  let isSentByCurrentUser = false;

  if (currentUser.id === user_id) {
    isSentByCurrentUser = true;
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

  //// my styling is bad but the general idea is there
  return (
    <p className="message">
      <span> {username} </span>
      <span className="message-body">
        {content}
      </span>
      <br />
      <span>@ {renderTimeStamp()}</span>
    </p>
  );
}