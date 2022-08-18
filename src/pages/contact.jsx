import React from 'react';
import { BsPinMapFill, BsTelephone, BsClock } from "react-icons/bs";


import Navbar from '../components/navigation/navbar';
import ContactForm from '../components/forms/contact-form';

function contact() {
  return (
    <div className='contact-container'>
      <Navbar />
      <div className="hero-section">
        <h2><span><BsPinMapFill /></span> Lincoln, KS</h2>
        <h2><span><BsTelephone /></span> (785) 534-6726</h2>
        <h2><span><BsClock /></span> M-F 8am - 1pm</h2>
        <div className="spacer">
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default contact