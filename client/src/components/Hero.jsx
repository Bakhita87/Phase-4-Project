import React from "react";
import Typed from "react-typed";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="hero-title">YOUR REVIEW MATTERS</p>
        <h1 className=" text-4xl font-bold ">Grow with data.</h1>
        <div className="typed-container">
          <p className="hero-subtitle">Fast, flexible reliable for</p>
          <Typed
            className="typed-text"
            strings={["REVIEWS", "BOOKING", "LOCATION"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="hero-description">
          Monitor your data analytics to make ourselves better for you.
        </p>
        <Link to="/signup">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
