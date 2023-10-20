import React from 'react';
import './Nav.css';
 import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  return (
    <div className="container">
      <div className="left-side">
        <h1>CompanyName</h1>
      </div>
      <div className="right-side">
        <p>It's your money. Get it with Name.</p>
        <p>Call us at 000-000-0000</p>
      </div>
      <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
              
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/solutions">Solutions</Link>
            </li>
            <li>
              <Link to="/partner-success">Partner Success</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link> 
            </li>
            <li>
            <Link to="/blog">Blog</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/clientarea">ClientArea</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;
