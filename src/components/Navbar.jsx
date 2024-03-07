import React, { useState } from "react";
import "./Navbar.css";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";
import ecell_logo from '../assets/ecell_logo.png'

const Navbar = () => {


  // ----- change background header-----------


  window.addEventListener('scroll', function(){
    const header = document.querySelector('nav');

    //when scroll is more than 200 adding the scrollheader
    if(this.scrollY >= 700) header.classList.add('scroll_navbar')
    else header.classList.remove('scroll_navbar')
})



  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
    console.log("clicked");
  };

  return (
    <nav>
      <div className="nav_logo">
        <img src={ecell_logo} alt="" />
      </div>
      <div className="nav_links_div">
        <ul className={`nav_links_ul ${toggle ? "show" : ""}`}>
          <div className="cross">
            <img src={cross} alt="close" onClick={handleToggle} />
          </div>
          <li>
            <a href="#home" className="nav_link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav_link">
              About
            </a>
          </li>
          <li>
            <a href="#events" className="nav_link">
              Events
            </a>
          </li>
          <li>
            <a href="#contact" className="nav_link">
              Contact
            </a>
          </li>
        </ul>
        <div className="nav_menu" onClick={handleToggle}>
          <img src={hamburger} alt="nav menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
