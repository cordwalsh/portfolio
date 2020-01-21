import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Apparel from './Apparel';
import Web from './Web';
import Contact from './Contact';
import S1_style_1 from '../assets/S1_style_1.jpg';
import S1_style_2 from '../assets/S1_style_2.jpg';
import S1_style_3 from '../assets/S1_style_3.jpg';
import S1_style_4 from '../assets/S1_style_4.jpg';
import S1_style_5 from '../assets/S1_style_5.jpg';
import S1_style_6 from '../assets/S1_style_6.jpeg';
import S1_style_7 from '../assets/S1_style_7.png';
import S1_style_8 from '../assets/S1_style_8.jpg';
import S1_style_9 from '../assets/S1_style_9.jpeg';
import S1_style_10 from '../assets/S1_style_10.jpg';

const Myung1 = () => (
  <div className="collection_container">

    <div className="home_header">
      <h1>Cord Walsh</h1>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/About"><h3>About</h3></Link>
        <Link to="/Web"><h3>Web Design</h3></Link>
        <Link to="/Apparel"><h3>Apparel Design</h3></Link>
    </div>

    <div className="home_contact">
      <Link to="/Contact"><h3>Contact</h3></Link>
    </div>

    <div className="collection_title_myung">
      <h1>Myung S1</h1>
    </div>

    <div class="collection_images">
      <div class="row">
        <div class="column">
          <img src={S1_style_1} />
          <img src={S1_style_2} />
          <img src={S1_style_3} />
          <img src={S1_style_4} />
          <img src={S1_style_5} />
          <img src={S1_style_6} />
          <img src={S1_style_7} />
          <img src={S1_style_8} />
          <img src={S1_style_9} />
          <img src={S1_style_10} />
        </div>
      </div>
    </div>



  </div>
);

export default Myung1;
