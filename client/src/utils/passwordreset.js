// PasswordReset.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";

function PasswordReset() {
  const { userId } = useParams(); // Removed the 'userPassword' variable
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Implement logic to send the newPassword and userId to the server
      // to update the user's password.

      // You can make a POST request to your server with the newPassword
      // and userId as JSON data to reset the password.
      const response = await fetch(
        `http://localhost:5000/users/reset-password/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPassword }),
        }
      );

      if (response.ok) {
        setMessage("Password reset successfully.");
      } else {
        const data = await response.json();
        setMessage(data.message || "An error occurred.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Password Reset</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label>New Password:</label>
          <input
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default PasswordReset;
