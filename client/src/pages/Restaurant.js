import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Header from "../utils/header";
// import Pictures from "../utils/picture";
import OtherContent from "../utils/other";

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

  const { Name, Amenities, Description } = restaurantData;

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
            <Header restaurantName={Name} />
            {/* <Reviews reviews={Reviews} /> */}
            {/* <Pictures restaurantPictures={"../assets/res1.jpeg"} /> */}
            <OtherContent amenities={Amenities} description={Description} />
          </div>
        </>
      )}
    </div>
  );
}

export default Restaurant;
