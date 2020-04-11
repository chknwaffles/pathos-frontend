import React from "react";

export default function InfoBar({ activeUser, URL }) {
  const fetchSecondTestUser = async () => {
    try {
      const userRes = await fetch(URL + "/users/defaultuser/2");
      console.log(userRes);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="info-bar">
      there will be alot of info about the chat like how many users and current
      count of comments ie x postive y netural z negative
      {activeUser ? (
        <button onCLick={() => fetchSecondTestUser()}> Fetch 2nd user</button>
      ) : null}
    </div>
  );
}
