import React from 'react';
import './Nav.css';
 import { Link, useNavigate } from "react-router-dom";

function NewNavbar() {
  

  return (
    <div className="container">
      
      <nav className="navbar">
          <ul>
            <li>
              <Link to="/">CustomerTestinomial</Link>
              
            </li>
            <li>
              <Link to="/what">What Name can do for you</Link>
            </li>
            <li>
              <Link to="/whatname">What Name has done</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default NewNavbar;
