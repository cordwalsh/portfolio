import React from 'react';
import { Link } from 'react-router-dom';
import Web from './Web';
import Contact from './Contact'
import About from './About';
import Four from './Four';
import Myung1 from './Myung1';
import Myung2 from './Myung2';


const Apparel = () => (
  <div className="page_container">
    <div className="home_header">
      <h1>Cord Walsh</h1>
      <Link to="/"><h3>Home</h3></Link>
      <Link to="/About"><h3>About</h3></Link>
      <Link to="/Web"><h3>Web Design</h3></Link>
      <h3>Apparel Design</h3>
    </div>

    <div className="home_contact">
      <Link to="/Contact"><h3>Contact</h3></Link>
    </div>

    <div className="apparel_list">
      <Link to="/Four"><h1>4/29 Collection</h1></Link>
      <Link to="/Myung1"><h1>Myung S1</h1></Link>
      <Link to="/Myung2"><h1>Myung S2</h1></Link>
      <div className="page_background"></div>
    </div>


  </div>
);

export default Apparel;
