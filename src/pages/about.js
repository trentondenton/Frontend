import React from 'react';
import { BsLinkedin, BsInstagram, BsCaretRight } from "react-icons/bs";

import Trenton from '../assets/images/trenton.jpg';
function About() {
  return (
    <div className='about-container'>
      <div className="hero-section">
        <h1 className='hero-a'>Meet the <span className="hero-g">Tech's</span>!</h1>
        <h1 className="hero-b">Big tech from local Kansas developers.</h1>
      </div>

      <div className="squares-container">
        <div className='dev-squares'>
          <div className='dev-square'>
            <img className='dev-img' alt="trenton" src={Trenton} />
          </div>
          <div className='dev-square-text'>
            <h1>Trenton Denton <a href="https://linked/in"><BsLinkedin /></a> <a href="https://linked/in"><BsInstagram /></a></h1>
            <p>Is a lifelong KS resident who grew up working on a dairy farm. He has a Bachelor’s Degree in CIS, an AAS in IT, he is also Certified in Full Stack and Mobile Development.</p>
            <div className='dev-facts'>
              <h2>A fun fact:</h2>
              <h2>Favorite language:</h2>
              <p><span><BsCaretRight /></span>Has 9 Dogs</p>
              <p><span><BsCaretRight /></span>JavaScript</p>
            </div>
          </div>
          <div className='dev-square-text'>
            <h1>Trenton Denton <a href="https://linked/in"><BsLinkedin /></a> <a href="https://linked/in"><BsInstagram /></a></h1>
            <p>Is a lifelong KS resident who grew up working on a dairy farm. He has a Bachelor’s Degree in CIS, an AAS in IT, he is also Certified in Full Stack and Mobile Development.</p>
            <div className='dev-facts'>
              <h2>A fun fact:</h2>
              <h2>Favorite language:</h2>
              <p><span><BsCaretRight /></span>Has 9 Dogs</p>
              <p><span><BsCaretRight /></span>JavaScript</p>
            </div>
          </div>
          <div className='dev-square'>
            <img className='dev-img' alt="trenton" src={Trenton} />
          </div>
        </div>
      </div>

      <div className="button-container">
        <button className="contact-btn" href="/contact">Contact Us!</button>
      </div>
    </div>
  )
}

export default About