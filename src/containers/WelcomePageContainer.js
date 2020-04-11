import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

export default function WelcomePageContainer() {
  return (
    <div className="welcome-page-container">
      <div className="body-section">
        <h1> Welcome to Pathos </h1>
        <h2>
          <Link className="styled-link" to="/login">
            Click here to sign up or login.{" "}
          </Link>
        </h2>
      </div>
    </div>
  );
}
