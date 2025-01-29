import React from "react";
import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2>SS Events & Exhibitions</h2>
        <p>Don't miss the chance to explore unique exhibits and experiences.</p>
        <Link to="/contact" className="cta-button">
          {" "}
          Contact Now
        </Link>
      </div>
    </div>
  );
};

export default CTA;
