import React from "react";

function Review({ reviews, onDeleteReview }) {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.Review_ID}>
            <h3>Rating: {review.Rating}</h3>
            <p>{review.Content}</p>
            <p>Date Created: {review.Date_Created}</p>
            <button onClick={() => onDeleteReview(review)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Review;
