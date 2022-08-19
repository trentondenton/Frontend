import React from 'react';
import { Link, useLocation } from "react-router-dom";

import TTechLogo from '../../assets/logo.png'

function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <img src={TTechLogo} alt="logo" />
      </div>
      <ul className="navigation-menu">
        <li className={splitLocation[1] === "" ? "nav-link-active" : "nav-links"}>
          <Link exact to="/">
            Home
          </Link>
        </li>
        <li className={splitLocation[1] === "about" ? "nav-link-active" : "nav-links"}>
          <Link exact to="/about">
            About
          </Link>
        </li>
        <li className={splitLocation[1] === "contact" ? "nav-link-active" : "nav-links"}>
          <Link exact to="/contact">
            Contact
          </Link>
        </li>
      </ul>

    </div >
  )
}

export default Navbar