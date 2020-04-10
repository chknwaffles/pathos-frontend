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
        <input class="input" type="text" placeholder="Type your message here" />
        <button class="button">Submit</button>
      </form>
    </div>
  );
}
