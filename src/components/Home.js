import React from 'react';
import './Homepage.css'; 
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <div className="homepage">
      
      <div className="left-side">
        <h2>Get paid. Get Name.</h2>
        <h3>Your Medical Safety Net</h3>
        <p>With a Consluaght of uninsured patients and increasing state budget cuts, Medicaid recovery is more important than ever. Name's data mining solution identifies Medicaid eligibility that otherwise could not be found by third-party vendors.</p>
        <p>Name isn't a collection agency, on-site eligibility vendor, or eligibility verification system. We're your Medicaid Recovery Partner - turning data into the dollars your hospital needs now.</p>
         <Link to="/about">LEARN MORE</Link>  
      </div>
      <div className="right-side">
        <img src="C:\React\reactapplication\my-website\Doctor.jpg" alt="Doctor" /> 
      </div>
    </div>
  );
}

export default Home;
