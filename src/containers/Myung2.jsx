import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Apparel from './Apparel';
import Web from './Web';
import Contact from './Contact';
import cardigan_15 from '../assets/cardigan_15.jpg';
import cardigan_16 from '../assets/cardigan_16.jpg';
import cardigan_21 from '../assets/cardigan_21.jpg';
import cardigan_31 from '../assets/cardigan_31.jpg';
import cardigan_33 from '../assets/cardigan_33.jpg';
import black_5 from '../assets/black_5.jpg';
import black_8 from '../assets/black_8.jpg';
import black_14 from '../assets/black_14.jpg';
import black_16 from '../assets/black_16.jpg';
import black_20 from '../assets/black_20.jpg';
import blue_4 from '../assets/blue_4.jpg';
import blue_6 from '../assets/blue_6.jpg';
import blue_8 from '../assets/blue_8.jpg';
import blue_19 from '../assets/blue_19.jpg';
import blue_26 from '../assets/blue_26.jpg';
import smoking_jacket from '../assets/smoking_jacket.jpg';
import smoking_jacket_standing from '../assets/smoking_jacket_standing.jpeg';
import cardigan_detail from '../assets/cardigan_detail.jpg';
import cardigan_detail_2 from '../assets/cardigan_detail_2.jpg';

const Myung2 = () => (
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

    <div className="collection_title_myung2">
      <h1>Myung S2</h1>
    </div>

    <div class="collection_images">
      <div class="row">
        <div class="column">
          <img src={cardigan_detail} />
          <img src={cardigan_33} />
          <img src={cardigan_detail_2} />
          <img src={cardigan_15} />
          <img src={black_14} />
          <img src={blue_6} />
          <img src={black_16} />
          <img src={blue_4} />
          <img src={smoking_jacket } />
          <img src={smoking_jacket_standing } />
        </div>
      </div>
    </div>


  </div>
);

export default Myung2;
