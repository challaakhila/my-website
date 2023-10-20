import React from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css'; 

function Solutions() {
  return (
    <div className="solutions-container">
      <h1 className="solutions-heading">Solutions</h1>
      <p className="solutions-paragraph">
        With an onslaught of uninsured patients and increasing state budget cuts, Medicaid recovery is more important than ever. Name's data mining solution identifies Medicaid eligibility that otherwise could not be found by third-party vendors.
      </p>
      <p className="solutions-paragraph">Solutions we Provide:</p>
      <ul className="solutions-list">
        <li className="solutions-list-item">Solution 1</li>
        <li className="solutions-list-item">Solution 2</li>
        <li className="solutions-list-item">Solution 3</li>
        <li className="solutions-list-item">Solution 4</li>
        <li className="solutions-list-item">Solution 5</li>
      </ul>
    </div>
  );
}

export default Solutions;
