import React from 'react';
import './Contact.css'; 
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <h5>Tulasi Solutions</h5>
      <p>Chirala, Bapatla, AP 523155</p>
      <Link>Email: info_tulasisolutions@gmail.com</Link><br></br>
      <Link>Tel: (91) 98765543210</Link>
    </div>
  );
}

export default Contact;
