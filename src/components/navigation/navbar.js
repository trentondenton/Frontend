import React from 'react';
import { Link } from "react-router-dom";

import TTechLogo from '../../assets/logo.png'

function Navbar({ toggle }) {
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <img src={TTechLogo} alt="logo" />
      </div>
      <ul className="navigation-menu">
        <li className="nav-links">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-links">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-links">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar