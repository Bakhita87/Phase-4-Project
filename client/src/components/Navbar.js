import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo">
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        htmlFor="menu-btn"
        onClick={toggleMenu}>
        <span className="nav-icon"></span>
      </label>

      <li className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <Link to="/restaurants">Restaurants</Link>
        </ul>
        <ul>
          <Link to="/about">About</Link>
        </ul>
        <ul>
          <Link to="#">Contact</Link>
        </ul>
        <ul>
          <Link to="#" onClick={handleLogout}>
            Logout
          </Link>
        </ul>
      </li>
    </nav>
  );
}

export default Navbar;
