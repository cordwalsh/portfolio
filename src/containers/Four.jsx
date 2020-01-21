import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Apparel from './Apparel';
import Web from './Web';
import Contact from './Contact';
import Style_5 from '../assets/Style_5.jpg';
import Style_1 from '../assets/Style_1.jpg';
import Style_4 from '../assets/Style_4.jpg';
import Style_7 from '../assets/Style_7.jpg';
import bw1 from '../assets/bw1.jpg';
import bw3 from '../assets/bw3.jpg';
import bw4 from '../assets/bw4.jpg';
import four_1 from '../assets/four_1.jpg';
import four_2 from '../assets/four_2.jpg';
import four_3 from '../assets/four_3.jpg';
import four_4 from '../assets/four_4.jpg';
import four_5 from '../assets/four_5.jpg';
import four_6 from '../assets/four_6.jpg';
import four_7 from '../assets/four_7.jpg';
import four_8 from '../assets/four_8.jpg';
import four_9 from '../assets/four_9.jpg';



const Four = () => (
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

    <div className="collection_title_four">
      <h1>4/29</h1>
    </div>

  <div class="collection_images">
    <div class="row">
      <div class="column">
        <img src={four_4} />
        <img src={four_1} />
        <img src={four_2} />
        <img src={four_3} />
        <img src={four_5} />
        <img src={four_6} />
        <img src={four_7} />
        <img src={four_8} />
        <img src={four_9} />
        <img src={Style_5} />
        <img src={Style_1} />
        <img src={Style_4} />
        <img src={Style_7} />
        <img src={bw1} />
        <img src={bw3} />
        <img src={bw4} />
      </div>
      </div>
    </div>



  </div>


);

export default Four;
