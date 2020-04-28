import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar(props) {
  const { handleUserInfo } = props;

  const handleLogout = async () => {
    const logout = async () => {
      try {
        const userRes = await fetch(`${URL}/users/logout`)
        const userData = await userRes.json();

        return userData
      } catch (err) {
        console.log(err)
      }
    }

    logout().then(data => {
      if (data.success) {
        handleUserInfo("");
        localStorage.removeItem("currentUser");
      } else {
        console.log(data.message)
      }
    })
  }

  return (
    <div className="navbar">
      <Link className="nav-item" to="/about"> ABOUT </Link>
      <Link className="nav-item" to="/profile"> PROFILE </Link>
      <Link className="nav-item" to="/chat"> CHAT </Link>
      <span className="nav-item" onClick={handleLogout}> LOGOUT </span>
    </div>
  );
}
