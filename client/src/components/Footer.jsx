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
        <h1 className="footer-logo">REACT.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
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
        <h6 className="column-title">Solutions</h6>
        <ul className="column-list">
          <li>Analytics</li>
          <li>Marketing</li>
          <li>Commerce</li>
          <li>Insights</li>
        </ul>
      </div>
      <div className="footer-column">
        <h6 className="column-title">Support</h6>
        <ul className="column-list">
          <li>Pricing</li>
          <li>Documentation</li>
          <li>Guides</li>
          <li>API Status</li>
        </ul>
      </div>
      <div className="footer-column">
        <h6 className="column-title">Company</h6>
        <ul className="column-list">
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-column">
        <h6 className="column-title">Legal</h6>
        <ul className="column-list">
          <li>Claim</li>
          <li>Policy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
