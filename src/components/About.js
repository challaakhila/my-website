import React from 'react';
import './AboutUs.css'; 
import { Navigate,useNavigate } from 'react-router-dom';

function About() {
    const  Navigate =useNavigate();
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        With an Consluaght of uninsured patients and increasing state budget cuts, Medicaid recovery is more important than ever. Name's data mining solution identifies Medicaid eligibility that otherwise could not be found by third-party vendors.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Amet justo donec enim diam. Dolor sit amet consectetur adipiscing elit pellentesque. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer.
      </p>
    
    </div>
  );
}

export default About;
