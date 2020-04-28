import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import FormContainer from "./FormContainer";

export default function WelcomePageContainer(props) {
  const { user, handleUserInfo, } = props;
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  const renderSubtitle = () => {
    if (user !== "") {
      return (
        <h2 className="styled-link">
          <Link className="styled-link" to="/chat">Click here to join the chat!</Link>
        </h2>
      )
    } else {
      return (
        <h2 className="form-link" onClick={handleClick}>
          Click here to sign up or login.
        </h2>
      )
    }
  }
  return (
    <div className="welcome-page-container">
      <div className="body-section">
        <h1> Welcome to Pathos </h1>
        {renderSubtitle()}

      </div>
      <FormContainer open={open} handleClick={handleClick} handleUserInfo={handleUserInfo} />
    </div>
  );
}
