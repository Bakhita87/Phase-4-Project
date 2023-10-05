import React, { useState } from "react";

function AddReview({ onAddReview }) {
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      Rating: rating,
      Content: content,
      Date_Created: new Date().toLocaleDateString(),
    };

    fetch("http://127.0.0.1:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddReview(data);
      })
      .catch((error) => {
        console.error("Error adding review:", error);
      });

    setRating("");
    setContent("");
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    backgroundColor: "#3d2514",
    color: "black",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            style={inputStyle}
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={{ ...inputStyle, height: "100px" }}
          />
        </label>
        <button type="submit" style={buttonStyle}>
          Add Review
        </button>
      </form>
    </div>
  );
}

export default AddReview;
