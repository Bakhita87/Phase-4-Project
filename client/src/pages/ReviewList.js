import React from "react";
import { FaStar } from "react-icons/fa";

function Review({ reviews, onDeleteReview }) {
  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const decimalPart = rating - fullStars;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star-filled" />);
    }

    if (decimalPart >= 1) {
      stars.push(<FaStar key="half" className="star-half" />);
    }

    for (let i = stars.length; i === 0; i++) {
      stars.push(<FaStar key={i} className="star-empty" />);
    }

    return stars;
  };

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.Review_ID}>
          <p>
            Rating: {parseFloat(review.Rating).toFixed(2)}{" "}
            {renderStarRating(review.Rating)}
          </p>
          <p>{review.Content}</p>
          <p>Date Created: {new Date(review.Date_Created).toLocaleString()}</p>
          <button onClick={() => onDeleteReview(review)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Review;
