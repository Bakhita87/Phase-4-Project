import React from "react";
import aboutImage from "../assets/about-image.jpg";
import Navbar from "../components/Navbar";

function handleClick() {
  alert("You clicked the About page!");
}

function About() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>{" "}
      <div onClick={handleClick}>
        <img src={aboutImage} alt="About Us" />
        <h2>About Us</h2>
        <p>
          Welcome to our restaurant review platform. We are a passionate team of
          food enthusiasts dedicated to helping you discover the best dining
          experiences.
        </p>
        <p>
          Our mission is to provide you with honest and reliable restaurant
          reviews so that you can make informed dining decisions.
        </p>
      </div>
    </>
  );
}

export default About;