import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stats-item">
        <div className="stats-number">120 + </div>
        <div className="stats-title">Projects</div>
        <p className="stats-description">
          We have successfully completed over 120 projects across various
          industries, showcasing our versatility.
        </p>
      </div>
      <div className="stats-item">
        <div className="stats-number">350 + </div>
        <div className="stats-title">Clients</div>
        <p className="stats-description">
          Our clients include top-tier companies that trust us with their most
          important projects.
        </p>
      </div>
      <div className="stats-item">
        <div className="stats-number">50 + </div>
        <div className="stats-title">Employees</div>
        <p className="stats-description">
          A team of over 50 dedicated professionals working together to achieve
          excellence.
        </p>
      </div>
    </div>
  );
};

export default Stats;
