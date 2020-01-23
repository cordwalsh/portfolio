import React from 'react';
import { Link } from 'react-router-dom';
import Apparel from './Apparel';
import Web from './Web';
import Home from './Home';
import head from '../assets/head.jpeg';
import Contact from './Contact'

const About = () => (
  <div className="about_container">

    <div className="home_header">
      <h1>Cord Walsh</h1>
      <Link to="/"><h3>Home</h3></Link>
      <h3>About</h3>
      <Link to="/Web"><h3>Web Design</h3></Link>
      <Link to="/Apparel"><h3>Apparel Design</h3></Link>
    </div>

    <div className="home_contact">
      <Link to="/Contact"><h3>Contact</h3></Link>
    </div>

    <div className="about_picture">
      <img src= {head} />
    </div>

    <div className="about_info">

      <div className="about_info_head">
        <h1>Enjoy your stay.</h1>
      </div>

      <div className="about_info_content">
        <p>Oregon raised. Apparel designer and Web developer. I have 6 plus years working in the fashion industry and want to steer my career towards web development. I have a strong focus on UI thanks to my design background.</p>
        <p>I've worked with a wide range of companies from small local businesses to global titans in the industry. (Nike and Lulu Lemon)</p>
        <p>I'm a quick learner and eager to enter a new field. React | Ruby | JS | Sass </p>
        <p>Detail oriented. Problem solver. Creative.</p>
        <a href="https://www.linkedin.com/in/cordwalsh/" target="_blank">Check the Deets.</a>
      </div>


    </div>



  </div>

);

export default About;
