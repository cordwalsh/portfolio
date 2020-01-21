import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Apparel from './Apparel';
import Contact from './Contact';
import tap_a_keg from '../assets/tap_a_keg.gif';
import winnie_the_pooh from '../assets/winnie_the_pooh.gif';
import karaoke from '../assets/karaoke.gif';
import help_queue from '../assets/help_queue.gif';
import better_doctor from '../assets/better_doctor.gif';
import epicarcades from '../assets/epicarcades.gif';

const Web = () => (
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

    <div className="web_title">
      <h1>Web</h1>
    </div>

    <div className="row">
      <div className="column">


        <img src={tap_a_keg} />
        <div className="web_description">
          <p>Tap a Keg is an app that allows users to add kegs to a list by their brand, name, price, and ABV. Users are also allowed to edit the list. Built in react with a ruby back-end.
          <a href="https://github.com/cordwalsh/beer-garden" target="_blank"> Check Github</a></p>
        </div>

        <img src={winnie_the_pooh} />
        <div className="web_description">
          <p>An interactive story book that accesses your microphone and listens to keywords read out loud to auto scroll down the page. Built with React and JS.
          <a href="https://github.com/cordwalsh/Capstone" target="_blank"> Check Github</a></p>
        </div>
        <img src={better_doctor} />
        <div className="web_description">
          <p>Better Doctor is an app that uses an API call to find doctors in the area. The user inputs an area of the body that needs attention and user location. Top 10 results in that field gets displayed.
            <a href="https://github.com/cordwalsh/independent-project-6" target="_blank"> Check Github</a></p>
          </div>

          <img src={epicarcades} />
          <div className="web_description">
            <p>A collaborative project with 4 classic arcade games made with Javascript. Each member was responsible for a game as well as different elements of the page.
              <a href="https://github.com/cordwalsh/multi-cade" target="_blank"> Check Github</a></p>
            </div>


        <img src={karaoke} />
        <div className="web_description">
          <p>A karaoke app made with a React front-end and Ruby back-end. Uses an API call for lyrics displayed.
          <a href="https://github.com/cordwalsh/karaoke_api" target="_blank"> Check Github</a></p>
        </div>

        <img src={help_queue} />
        <div className="web_description">
          <p>A help queue made with a React front-end and Ruby back-end to store user information. Click into the ticket in order to view issue.
          <a href="https://github.com/cordwalsh/redux--help-queue" target="_blank"> Check Github</a></p>
        </div>



      </div>
    </div>



  </div>
);

export default Web;
