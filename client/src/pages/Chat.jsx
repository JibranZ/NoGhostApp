import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Chat = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <h1>Chat</h1>
      <Link to={"/login"} className="link" onClick={() => logoutUser()}>
        Logout
      </Link>
    </div>
  );
};

export default Chat;
