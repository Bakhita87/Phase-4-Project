import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import "../styles/SignUp.css"; // You can reuse the styles from SignUp.css
import email_icon from "../assets/email.png";

function Recover() {
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
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Password recovery email sent. Please check your inbox.");
      } else {
        const data = await response.json();
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      {loading ? (
        <HashLoader
          className="loader"
          color={"#3d2514"}
          loading={loading}
          css={override}
          size={500}
        />
      ) : (
        <div className="container">
          <div className="header">
            <div className="text">Password Recovery</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <form onSubmit={handleSubmit}>
              <div className="input">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <button type="submit" className="submit">
                Recover Password
              </button>
            </form>
          </div>
          {message && <div className="error-message">{message}</div>}
          <div className="forgot-password">
            Back to Login?
            <span>
              <Link to="/login">Click Here</Link>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recover;
