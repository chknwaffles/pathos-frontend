import React, { useState } from "react";
import "../../styles/chat/chat.css";

export default function MessageForm({ handleMessageSubmit }) {
  const [fields, setFields] = useState({ username: "test", content: "" });

  const handleInput = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleMessageSubmit(fields);

    //clear fields
    setFields({ username: "test", content: "" });
  };

  return (
    <div className="message-form-container">
      <form className='message-form' onSubmit={handleSubmit}>
        <input className="input" name="content" type="text" value={fields.content} size="200" maxlength="200" onChange={handleInput} placeholder="Press enter to send your message." />
      </form>
    </div>
  );
}
