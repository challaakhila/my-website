import React from 'react';
import './Content.css';

function Content() {
  return (
    <div >
      <header>
        
        <div className="header-block">
          <h1>Customer Testimonial</h1> 
        </div>
        <div className="header-block">
          <h1>What Name can do for you</h1>
        </div>
        <div className="header-block">
          <h1>What Name has done</h1>
          </div>
      </header>
      
      <div className="testimonial-box">
            <p>
              "Name has been a valuable partner in helping us maximize<br></br> our Medicaid recoveries.
               They've been responsive and flexible in<br></br> customizing the service to create solutions that meet our needs."
            </p>
            <p>
              <strong>Aaron Waldie</strong><br />
              Director Patient Accounting<br />
              Truman Medical Centers
            </p>
    </div>
    <div className='solutions'>
        <ul>
    <li>Recover 1-5% of your hospital's uncompensated Care accounts and increase cash flow.</li>
          <li>Identify additional DSH days and Medicare/Medicaid dual-eligible accounts.</li>
          <li>Seamless Integration - no process changes required.</li>
          <li>No set up fees or processing costs. We only get paid when you get paid.</li>
        </ul>
        <p><a href="#">View All Solutions</a></p>
    </div>
    <div className="left-content">
        <p>
          We've found over $500,000,000 in charges for our hospital partners. We'd like to do the same for you.
        </p>
      </div>
    </div>
    
  );
}

export default Content;
