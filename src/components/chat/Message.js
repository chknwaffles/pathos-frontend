import React from "react";

import "../../styles/chat/chat.css";

export default function Message(props) {
  const { username, content } = props;

  return (
    <React.Fragment>
      <p>{username}: {content}</p>
    </React.Fragment>
  );
}
