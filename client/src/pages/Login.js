import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import "../styles/SignUp.css";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

function Login() {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top: 20%;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginClick = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill in all the fields.");
      return;
    }

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
        navigate("/home");
      } else if (response.status === 401) {
        setErrorMessage("Invalid email or password.");
      } else {
        setErrorMessage("An error occurred while logging in.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <div>
      {" "}
      {loading ? (
        <HashLoader
          className="loader"
          color={"#3d2514"}
          loading={loading}
          css={override}
          size={500}
        />
      ) : (
        <>
          {" "}
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
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
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
        </>
      )}
    </div>
  );
}

export default Login;
