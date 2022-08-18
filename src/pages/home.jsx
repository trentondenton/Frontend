import React from 'react';
import { BsFillArrowRightCircleFill, BsCodeSlash, BsCloud, BsFileRichtext, BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

import NavBar from '../components/navigation/navbar';

export default function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <div className="hero-section">
        <h1 className='hero-a'>Welcome to <span className="hero-g">T.Tech</span>!</h1>
        <h1 className="hero-b">IT, Software, Design, and Tech Services</h1>
        <button className="learn-btn">Learn More <BsFillArrowRightCircleFill className="react-icon" /></button>
      </div>
      <div className="services-container">
        <h1>Services We Offer</h1>
        <div className="cards-container">

          <div className="card">
            <div className="card-top">
              <BsCloud />
            </div>
            <div className="card-middle">
              <h2>IT Services</h2>
            </div>
            <div className="card-bottom">
              <p>Cloud dev, IT consulting, network dev, and tech support.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <BsFileRichtext />
            </div>
            <div className="card-middle">
              <h2>Web Design</h2>
            </div>
            <div className="card-bottom">
              <p>UI/UX packages, landing pages, logo, web apps, and more!</p>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <BsCodeSlash />
            </div>
            <div className="card-middle">
              <h2>Software Dev</h2>
            </div>
            <div className="card-bottom">
              <p>Custom web apps, mobile apps, desktop apps, using modern tech!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="technologies-container">
        <h1>Technologies</h1>
        <div className="tech-card">
          <div className="tech-item">
          </div>
          <div className="tech-item">
          </div>
          <div className="tech-item">
          </div>
          <div className="tech-item">
          </div>
          <div className="tech-item">
          </div>
        </div>
      </div>
      <div className="socials-container">
        <p>Follow Us!</p>
        <div className="socials-card">
          <a href="https://linked.in"><BsLinkedin /></a>
        </div>
        <div className="socials-card">
          <a href="https://facebook.com"><BsFacebook /></a>
        </div>
        <div className="socials-card">
          <a href="https://instagram.com"><BsInstagram /></a>
        </div>
      </div>
    </div >
  )
}
