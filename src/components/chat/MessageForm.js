import React, { useState } from "react";

export default function MessageForm({ handleMessageSubmit }) {
  const [fields, setFields] = useState({ username: "", message: "" });

  const handleInput = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleMessageSubmit(fields);

    //clear fields
    setFields({ username: "", message: "" });
  };

  return (
    <div className="message-form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="message-form"
          name="message"
          type="text"
          value={fields.message}
          maxLength="200"
          onChange={(e) => handleInput(e)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
