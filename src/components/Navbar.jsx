import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="nav_logo">
        <h2>Logo</h2>
      </div>
      <div className="nav_links_div">
        <ul className="nav_links_ul">
            <li><a href="#home" className="nav_link">Home</a></li>
            <li><a href="#about" className="nav_link">About</a></li>
            <li><a href="#events" className="nav_link">Events</a></li>
            <li><a href="#contact" className="nav_link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
