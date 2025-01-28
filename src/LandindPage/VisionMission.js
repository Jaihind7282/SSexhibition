import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./VisionMission.css";

const VisionMission = () => {
  return (
    <div className="vision-mission-container">
      <div className="vision-section">
        <div className="text-container">
          <h2 className="heading">Our Vision</h2>
          <p className="description">
            Our vision is to create a platform where art, history, and culture
            come together to inspire and educate individuals, allowing them to
            connect with the world’s creative heritage in a meaningful way.
          </p>
          {/* Replace <a> with <Link> for navigation */}
          <Link to="/about" className="learn-more-link">
            Learn More
          </Link>
        </div>
      </div>
      <div className="mission-section">
        <div className="text-container">
          <h2 className="heading">Our Mission</h2>
          <p className="description">
            Our mission is to provide an inclusive and immersive exhibition
            experience, offering a platform for artists, innovators, and
            educators to showcase their work and engage with audiences in
            meaningful ways.
          </p>
          {/* Replace <a> with <Link> for navigation */}
          <Link to="/about" className="learn-more-link">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
