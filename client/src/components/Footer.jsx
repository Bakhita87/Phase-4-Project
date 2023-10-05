import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <h1 className="footer-logo">REVIEWS.</h1>
        <p>
          We are dedicated to preview your opinions on our restaurants and we
          humbly accept any mistakes made and promise to correct them at once!
        </p>
        <div className="social-icons">
          <FaFacebookSquare />
          <FaInstagram />
          <FaTwitterSquare />
          <FaGithubSquare />
          <FaDribbbleSquare />
        </div>
      </div>
      <div className="footer-column">
        <h6 className="column-title">SOLLUTIONS</h6>
        <ul className="column-list">
          <li>Analytics</li>
          <li>Marketing</li>
          <li>Commerce</li>
          <li>Insights</li>
        </ul>
      </div>
      <div className="footer-column">
        <h6 className="column-title">SUPPORT</h6>
        <ul className="column-list">
          <li>Pricing</li>
          <li>Documentation</li>
          <li>Guides</li>
          <li>API Status</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
