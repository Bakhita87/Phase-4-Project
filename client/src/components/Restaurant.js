import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

function Restaurant() {
  const { restaurantId } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
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

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/restaurants/${restaurantId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Received data:", data);
        setRestaurantData(data);
      })
      .catch((error) => {
        console.error("Error fetching restaurant data:", error);
      });
  }, [restaurantId]);

  if (!restaurantData) {
    return <div>Loading...</div>;
  }

  const { Name, Amenities, Description, Reviews } = restaurantData;

  return (
    <div>
      {" "}
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
            <h1>{Name}</h1>
            <p>{Description}</p>
            <p>{Amenities}</p>
            <ul>
              {Array.isArray(Amenities) ? (
                <ul>
                  {Amenities.map((amenity) => (
                    <li key={amenity}>{amenity}</li>
                  ))}
                </ul>
              ) : (
                <p>Amenities data is not in the expected format.</p>
              )}
            </ul>
            <p>{Reviews}</p>
            <ul>
              {Array.isArray(Reviews) ? (
                Reviews.map((review) => (
                  <li key={review.Review_ID}>
                    <p>Rating: {review.Rating}</p>
                    <p>{review.Content}</p>
                  </li>
                ))
              ) : (
                <p>Reviews data is not in the expected format.</p>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Restaurant;
