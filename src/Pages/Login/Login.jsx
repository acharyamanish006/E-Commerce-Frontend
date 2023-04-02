import React, { useState } from "react";
import "./login.scss";
import GoogleLogo from "./assets/goole.png";
import FacebookLogo from "./assets/facebook.png";
import { Link } from "react-router-dom";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  // const  [email, setemail] = useState('')
  // const  [password, setpassword] = useState('')
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="login-page">
      <div className="wrapper">
        <div></div>
        <h1>Sign in</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your Email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.currentTarget.value)}
          />
          <input
            type="text"
            placeholder="Enter your Password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.currentTarget.value)}
          />
          <input type="submit" value="Login" className="login-btn" />
        </form>
        <div className="other-options">
          <h3>or</h3>
          <p>Sign in </p>
          <img src={GoogleLogo} alt="Google" />
          <img src={FacebookLogo} alt="Facebook" />
        </div>
        <div className="register-options">
          <p>
            Don't have an account <Link to={"/register"}>sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
