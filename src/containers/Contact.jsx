import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Apparel from './Apparel';
import Web from './Web';







const Contact = () => (
  <div className="contact_container">

    <div className="home_header">
      <h1>Cord Walsh</h1>
      <Link to="/"><h3>Home</h3></Link>
      <Link to="/About"><h3>About</h3></Link>
      <Link to="/Web"><h3>Web Design</h3></Link>
      <Link to="/Apparel"><h3>Apparel Design</h3></Link>
    </div>

    <div className="home_contact">
      <h3>Contact</h3>
    </div>

    <div className="resume">
      <a href="https://www.linkedin.com/in/cordwalsh/" target="_blank">
      <h1>Connect</h1>
      </a>
      <p>cordmwalsh@gmail.com</p>


    </div>


  </div>
);


export default Contact;
