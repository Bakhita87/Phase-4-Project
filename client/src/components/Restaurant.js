import React, { useState, useEffect } from "react";
import axios from "axios";

function Restaurant() {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/restaurants")
      .then((response) => {
        console.log(response.data);
        setRestaurantData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="restaurant-card">
      {restaurantData ? (
        <>
          <img
            src={restaurantData.imageURL}
            alt={restaurantData.name}
            className="restaurant-image"
          />
          <h2 className="restaurant-name">{restaurantData.name}</h2>
          <p className="restaurant-location">{restaurantData.location}</p>
        </>
      ) : (
        <p>Loading restaurant data...</p>
      )}
    </div>
  );
}

export default Restaurant;
