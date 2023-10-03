import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import "../styles/SignUp.css";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginClick = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );

      const userData = response.data[0];

      if (userData) {
        setErrorMessage("");
        navigate("/home");
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="forgot-password">
        Forgot Password?
        <span>
          <Link to="/recover">Click Here</Link>{" "}
        </span>
      </div>
      <div className="submit-container">
        <div onClick={handleLoginClick}>
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
