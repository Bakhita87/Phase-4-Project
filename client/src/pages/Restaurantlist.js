import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import "../styles/RestaurantList.css";

function RestaurantList() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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
    fetch("http://127.0.0.1:5000/restaurants")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API response:", data);
        setRestaurantData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("restaurantData:", restaurantData);

  const filteredRestaurants = restaurantData.filter((restaurant) =>
    restaurant.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <Link to="/home">Home</Link>
              <input
                type="text"
                placeholder="Search by restaurant name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </nav>

            <div className="restaurant-list">
              {filteredRestaurants.length > 0 ? (
                filteredRestaurants.map((restaurant, index) => (
                  <Link
                    to={`/restaurants/${restaurant.Restaurant_ID}`}
                    key={index}
                    className="restaurant-card">
                    <img
                      src={restaurant.Image_URL}
                      alt={restaurant.Name}
                      className="restaurant-image"
                      style={{ width: "500px", height: "450px" }}
                    />
                    <h2 className="restaurant-name">{restaurant.Name}</h2>
                    <p className="restaurant-location">{restaurant.Location}</p>
                  </Link>
                ))
              ) : (
                <p>No restaurants found.</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default RestaurantList;
