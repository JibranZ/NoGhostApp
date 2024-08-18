import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    registerUser(); // Call the registerUser function
  };

  return (
    <div className="main">
      <h1 className="main-title gradient-text">Register</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="label gradient-text">
            Name
          </label>
          <input
            className="textbox"
            id="username"
            type="text"
            placeholder="name"
            value={registerInfo.name}
            onChange={(e) =>
              updateRegisterInfo({ ...registerInfo, name: e.target.value })
            }
          />
          <label htmlFor="email" className="label gradient-text">
            Email
          </label>
          <input
            className="textbox"
            id="email"
            type="text"
            placeholder="email"
            value={registerInfo.email}
            onChange={(e) =>
              updateRegisterInfo({ ...registerInfo, email: e.target.value })
            }
          />
          <label htmlFor="password" className="label gradient-text">
            Password
          </label>
          <input
            className="textbox"
            id="password"
            type="password"
            placeholder="password"
            value={registerInfo.password}
            onChange={(e) =>
              updateRegisterInfo({ ...registerInfo, password: e.target.value })
            }
          />
          <button className="signup-button" type="submit">
            {isRegisterLoading ? "Creating Account" : "Register"}
          </button>
          {registerError?.error && (
            <div>
              <p className="alert">{registerError?.message}</p>
            </div>
          )}
        </form>
        <Link to={"/login"} className="link">
          Have a account? <b>Login Here </b>
        </Link>
      </div>
    </div>
  );
};

export default Register;
