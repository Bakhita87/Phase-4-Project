import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Review.css";

function Reviews({ user }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/reviews?restaurant_id=${id}`
        );
        if (response.status === 200) {
          setReviews(response.data);
        } else {
          throw new Error("Failed to fetch reviews");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [id, user]);

  const handleSubmitReview = async () => {
    if (!user || !user?.id) {
      console.error("User or user.id is undefined");
      return;
    }

    const reviewData = {
      user_id: user.id,
      restaurant_id: id,
      rating: rating,
      content: newReview,
    };

    try {
      await axios.post("http://localhost:5000/reviews", reviewData);
      console.log("Review submitted successfully");

      const response = await axios.get(
        `http://localhost:5000/reviews?restaurant_id=${id}`
      );

      if (response.status === 200) {
        setReviews(response.data);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await axios.delete(`http://localhost:5000/delete-review/${reviewId}`);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.Review_ID !== reviewId)
      );
      console.log("Review deleted successfully");
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div>
      <h1>Reviews for Restaurant</h1>
      <div className="review-form">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Add your review..."
        />
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Rating (1-5)"
          min="1"
          max="5"
        />
        <button onClick={handleSubmitReview}>Submit Review</button>{" "}
      </div>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p>{review.content}</p>
            <p>Rating: {review.rating}</p>
            {review.restaurant ? (
              <p>Restaurant: {review.restaurant.name}</p>
            ) : (
              <p>Restaurant: Not specified</p>
            )}
            <button onClick={() => handleDeleteReview(review.id)}>
              Delete Review
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
