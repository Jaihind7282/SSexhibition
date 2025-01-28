import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2>SS Events & Exhibitions</h2>
        <p>Don't miss the chance to explore unique exhibits and experiences.</p>
        <a href="/contact" className="cta-button">
          Contact Now
        </a>
      </div>
    </div>
  );
};

export default CTA;
