import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Apparel from './Apparel';
import Web from './Web';
import Contact from './Contact'




const Home = () => (
  <div className="page_container">

    <div className="home_header">
      <h1>Cord Walsh</h1>
      <h3>Home</h3>
      <Link to="/About"><h3>About</h3></Link>
      <Link to="/Web"><h3>Web Design</h3></Link>
      <Link to="/Apparel"><h3>Apparel Design</h3></Link>
    </div>

    <div className="home_contact">
      <Link to="/Contact"><h3>Contact</h3></Link>
    </div>

    <div className="home_list">
      <h1>Developer</h1>
      <h1>Designer</h1>
    </div>

  </div>
);

export default Home;
