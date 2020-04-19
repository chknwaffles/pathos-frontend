import React, { useState } from "react";

export default function MessageForm({ handleMessageSubmit, user }) {
  const [message, setMessage] = useState({
    username: user.username,
    content: "",
  });

  const handleInput = (e) => {
    setMessage({ username: user.username, content: e.target.value });
  };

  // for some reason I have to have a return or something cant just putt null.. put an alert for now because i cant do a return on acccount of the fields not being cleared
  const handleSubmit = (e) => {
    e.preventDefault();
    message.content.length == 0
      ? alert("Blank message say something yo")
      : handleMessageSubmit(message);

    //clear fields
    setMessage({ username: user.username, content: "" });
  };

  return (
    <div className="message-form-container">
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          className="input"
          name="content"
          type="text"
          value={message.content}
          size="200"
          maxLength="200"
          onChange={handleInput}
          placeholder="Press enter to send your message."
        />
        <button className="input-button">Enter</button>
      </form>
    </div>
  );
}
