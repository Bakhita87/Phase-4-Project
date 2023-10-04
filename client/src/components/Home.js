import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import "../styles/Home.css";
import Reviews from "./Reviews";
// import Navbar from "./Navbar";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {" "}
      {loading ? (
        <HashLoader
          className="loader"
          color={"#3d2514"}
          loading={loading}
          size={500}
        />
      ) : (
        <div className="home">
          {/* <Navbar /> */}
          <Reviews />
        </div>
      )}
    </div>
  );
}

export default Home;
