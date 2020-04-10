import React, { useState } from "react";
import "../styles/chat/chat.css";
import MessageForm from "../components/chat/MessageForm";
import Message from "../components/chat/Message";

export default function ChatContainer() {
  const [log, setLog] = useState([]);

  const handleMessageSubmit = (message) => {
    setLog([...log, message]);
  };

  return (
    <div className="chat-container">
      <div className="message-container">
        asdfasdfsadf
        {log.map((m, i) => (
          <Message key={i} {...m} />
        ))}
      </div>
      <MessageForm
        className="message-form"
        handleMessageSubmit={handleMessageSubmit}
      />
    </div>
  );
}
