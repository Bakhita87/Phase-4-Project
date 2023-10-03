import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo">
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <li className="menu">
        <ul>
          <Link to="#">Header</Link>
        </ul>
        <ul>
          <Link to="#">Products</Link>
        </ul>
        <ul>
          <Link to="#">About</Link>
        </ul>
        <ul>
          <Link to="#">Contact</Link>
        </ul>
      </li>
    </nav>
  );
}

export default Navbar;
