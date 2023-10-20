import React from 'react';
import './FAQs.css'; 

function FAQs() {
  return (
    <div>
      <div className="search-box">
        <h1>HOW can I help you?</h1>
        <input type="text" placeholder=" " />
        <button>Search</button>
      </div>
      <div className="faqs-container">
        <h1 className="faqs-heading">Frequently Asked Questions</h1>
        <div className="faq-box">
          <strong className="faqs-question">Frequently Asked Question 1?</strong>
          <p className="faqs-answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. View More...
          </p>
        </div>
        <div className="faq-box">
          <strong className="faqs-question">Frequently Asked Question 2?</strong>
          <p className="faqs-answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. View More...
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default FAQs;
