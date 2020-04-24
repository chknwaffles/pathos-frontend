import React, { useState } from "react";
import "../styles/main.css";
import FormContainer from "./FormContainer";

export default function WelcomePageContainer(props) {
  const { handleUserInfo } = props;
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <div className="welcome-page-container">
      <div className="body-section">
        <h1> Welcome to Pathos </h1>
        <h2 className="form-link" onClick={handleClick}>
          Click here to sign up or login.
        </h2>
      </div>
      <FormContainer open={open} handleClick={handleClick} handleUserInfo={handleUserInfo} />
    </div>
  );
}
