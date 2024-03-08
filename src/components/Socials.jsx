
import React from 'react';
import {FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Socials.css';

const Socials = () => {
  return (
    <div className="social-icons-animated-container">
      <h5 className='Visitus'>Visit Us:</h5>
      <a href="https://www.instagram.com/ecelladgips/" className="social-icon"><FaInstagram /></a>
      <a href="https://www.linkedin.com/company/ecell-adgitm/" className="social-icon"><FaLinkedin /></a>
      
    </div>
  );
};

export default Socials;
