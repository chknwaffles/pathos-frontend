import React from "react";

import NavBar from "./NavBar";
import Profile from "../components/navbar/Profile"

import "../styles/profile.css"

export default function ProfileContainer(props) {
    const { user, handleUserInfo } = props;

    return (
        <div className="profile-container">
            <NavBar handleUserInfo={handleUserInfo} />
            <Profile user={user} />
        </div>
    )
}