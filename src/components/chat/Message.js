import React from "react";
import "../../styles/chat/chat.css";

export default function Message(props) {
  const { username, message } = props;

  return (
    <React.Fragment>
      <p>{username}: {message}</p>
    </React.Fragment>
  );
}
