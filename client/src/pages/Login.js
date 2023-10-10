import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import "../styles/SignUp.css";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginClick = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill in all the fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        setErrorMessage("");
        setLoading(false); // Turn off the loader
        navigate("/home");
      } else if (response.status === 401) {
        setErrorMessage("Invalid email or password.");
        setLoading(false); // Turn off the loader
      } else {
        setErrorMessage("An error occurred while logging in.");
        setLoading(false); // Turn off the loader
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
      setLoading(false); // Turn off the loader
    }
  };

  return (
    <div>
      <HashLoader
        className={`loader ${loading ? "show-loader" : "hide-loader"}`}
        color={"#3d2514"}
        loading={loading}
        size={500}
      />
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
    </div>
  );
}

export default Login;
