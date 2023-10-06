import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Header from "../utils/header";
import OtherContent from "../utils/other";
import "../styles/RestaurantList.css";
import AddReview from "../components/AddReviews";
import Review from "../pages/ReviewList";

function Restaurant() {
  const { restaurantId } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  const deleteReview = (reviewToDelete) => {
    const updatedReviews = reviews.filter(
      (review) => review !== reviewToDelete
    );
    setReviews(updatedReviews);
  };
  const override = css`
    justify-content: center;
    align-items: center;
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

  useEffect(() => {
    // Fetch restaurant details
    fetch(`http://127.0.0.1:5000/restaurants/${restaurantId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Received restaurant data:", data);
        setRestaurantData(data);
      })
      .catch((error) => {
        console.error("Error fetching restaurant data:", error);
      });
    fetch(`http://127.0.0.1:5000/reviews?restaurant_id=${restaurantId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Received reviews data:", data);
        setReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching reviews data:", error);
      });
  }, [restaurantId]);

  if (!restaurantData) {
    return <div>Loading...</div>;
  }

  const { Name, Amenities, Description } = restaurantData;

  return (
    <div className="container">
      {loading ? (
        <HashLoader
          color={"#3d2514"}
          loading={loading}
          css={override}
          size={500}
        />
      ) : (
        <>
          <div>
            <nav className="navbar">
              <Link to="/restaurantlist">Back</Link>
            </nav>
            <div className="details">
              <Header restaurantName={Name} />
              <OtherContent amenities={Amenities} description={Description} />
              <AddReview onAddReview={addReview} restaurantId={restaurantId} />
              <Review reviews={reviews} onDeleteReview={deleteReview} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Restaurant;
