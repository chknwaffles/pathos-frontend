import React, { useState } from "react";

export default function MessageForm({ handleMessageSubmit }) {
  const [fields, setFields] = useState({ username: "test", content: "" });

  const handleInput = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  // for some reason I have to have a return or something cant just putt null.. put an alert for now because i cant do a return on acccount of the fields not being cleared
  const handleSubmit = (e) => {
    e.preventDefault();
    fields.content.length == 0
      ? alert("Blank message say something yo")
      : handleMessageSubmit(fields);

    //clear fields
    setFields({ username: "test", content: "" });
  };

  return (
    <div className="message-form-container">
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          className="input"
          name="content"
          type="text"
          value={fields.content}
          size="200"
          maxlength="200"
          onChange={handleInput}
          placeholder="Press enter to send your message."
        />
        <button className="input-button">Enter</button>
      </form>
    </div>
  );
}
