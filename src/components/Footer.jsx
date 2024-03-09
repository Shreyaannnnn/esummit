import React from "react";
import './Footer.css'; 
import ecell_logo from '../assets/ecell_logo.png'


const Footer = () => {
  return (
    <footer className="footer-container"  id="contact">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src= {ecell_logo} alt="Logo" className="logo" />
        </div>
        <div className="footer-section quick-links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            {/* <li><a href="#contact">Contact</a></li> */}
          </ul>
        </div>
        <div className=" contact-section">
          <h4>Contact Us</h4>
          <p>FC-26, Panduk Shila Marg, Zero Pusta Rd, Shastri Park,</p>
          <p> Shahdara, New Delhi, Delhi 110053</p>
          <br />
          <p>Email:  ecelladgitm@gmail.com</p>
          <p>Phone: +91 82870 40010</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;