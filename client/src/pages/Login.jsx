import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";


const Login = () => {
  const { loginUser, loginError, loginInfo, updateLoginInfo, isLoginLoading } =
    useContext(AuthContext);

  return (
    <div className="main">
      <h1 className="main-title gradient-text">Login</h1>
      <div className="container">
        <form onSubmit={loginUser}>
          <label htmlFor="email" className="label gradient-text">
            Email
          </label>
          <input
            className="textbox"
            id="email"
            type="text"
            placeholder="email"
            onChange={(e) =>
              updateLoginInfo({ ...loginInfo, email: e.target.value })
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
            onChange={(e) =>
              updateLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
          <button className="signup-button" type="submit">
            {isLoginLoading ? "Logging in..." : "Login"}
          </button>

          {loginError?.error && (
            <div>
              <p className="alert">{loginError?.message}</p>
            </div>
          )}
        </form>
        <Link to={"/register"} className="link">
          Dont have an account? <b>Sign up here </b>
        </Link>
      </div>
    </div>
  );
};

export default Login;
