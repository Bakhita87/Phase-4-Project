import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios"; // Import Axios
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
    }, 3000);
  }, []);
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
