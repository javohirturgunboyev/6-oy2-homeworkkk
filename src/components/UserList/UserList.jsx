import React from "react";
import "./userList.css";
import User from "../User/User";

function userList(props) {
  const { data } = props;
  return (
    <div className="container">
      <User/>
    </div>
  );
}

export default userList;
