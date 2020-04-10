import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar(props) {
  const { username, message } = props;

  //TODO logic needs to be done show logout {props.user? <div OnClick={logout()}}>Log Out <div> : null > etc

  return (
    <div className="navbar">
      <Link to="/about"> ABOUT </Link>
      <Link to="/profile"> PROFILE </Link>
    </div>
  );
}
