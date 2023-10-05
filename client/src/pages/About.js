import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image1 from "../assets/image3.jpeg";
import image2 from "../assets/image2.jpeg";
import "../styles/App.css"; // Create a separate CSS file for About page styles

function About() {
  return (
    <div>
      <Navbar />
      <div className="about">
        <div className="image-container">
          <img src={image1} alt="A beautiful landscape" />
          <img src={image2} alt="A beautiful landscape" />
        </div>
        <h2 className="about-heading">About Us</h2>

        <p className="about-paragraph">
          Welcome to our restaurant review platform. We are a passionate team of
          food enthusiasts dedicated to helping you discover the best dining
          experiences.
        </p>

        <p className="about-paragraph">
          Our mission is to provide you with honest and reliable restaurant
          reviews so that you can make informed dining decisions.
        </p>

        <p className="about-paragraph">
          Our mission is to provide a trusted space for food enthusiasts to
          discover, review, and share their culinary adventures. We believe in
          the power of honest and reliable restaurant reviews to help you make
          the best dining decisions.
        </p>
        <p className="about-paragraph">
          Our community is driven by passionate foodies like you, and together,
          we create a platform where every dining experience matters.
        </p>

        <p className="about-paragraph">
          Join us in the journey of exploring new flavors, sharing your
          insights, and connecting with fellow food lovers.
        </p>
      </div>
      <div className="path">
        <Footer />
      </div>
    </div>
  );
}

export default About;
