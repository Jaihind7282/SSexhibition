import React from "react";
import "./AboutUs.css";
import CTA from "../LandindPage/CTA";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container">
        <section className="about-section">
          <div className="about-image">
            <img src="images/SSExhibition.jpg" alt="Exhibition" />
          </div>
          <div className="about-details">
            <h2>About SS Exhibition</h2>
            <p>
              SS Exhibition is a leading provider of innovative exhibition
              design and installation services. With years of experience in the
              industry, we have built a reputation for delivering creative,
              impactful, and engaging experiences that captivate audiences and
              showcase the best in art, design, and technology.
            </p>
          </div>
        </section>

        <section className="leadership-section">
          <div className="leadership-details">
            <h2>Leadership</h2>
            <p>
              Our leadership team consists of seasoned professionals who bring
              diverse expertise and vision to the table. They are dedicated to
              pushing the boundaries of creativity and innovation to ensure
              every exhibition project exceeds expectations.
            </p>
          </div>
          <div className="leadership-image">
            <img src="images/leadership.jpg" alt="Leadership" />
          </div>
        </section>

        <section className="mission-vision-section">
          <div className="mission-vision-image">
            <img src="images/MissionVision.jpg" alt="Mission and Vision" />
          </div>
          <div className="mission-vision-details">
            <h2>Mission & Vision</h2>
            <p>
              Our mission is to create unique, memorable exhibitions that
              inspire, educate, and engage audiences. We aim to lead the
              industry in exhibition design, setting trends and elevating
              visitor experiences to new heights.
            </p>
            <p>
              Our vision is to be the global leader in immersive and interactive
              exhibition experiences, recognized for our creativity, precision,
              and commitment to excellence.
            </p>
          </div>
        </section>

        <section className="strength-values-section">
          <div className="strength-values-details">
            <h2>Strength & Values</h2>
            <p>
              Our strength lies in our team, our passion for design, and our
              ability to blend creativity with technology. We value
              collaboration, attention to detail, and the drive to constantly
              innovate.
            </p>
            <ul>
              <li>Innovation and Creativity</li>
              <li>Commitment to Excellence</li>
              <li>Integrity and Transparency</li>
              <li>Customer-Centric Approach</li>
            </ul>
          </div>
          <div className="strength-values-image">
            <img src="images/Strength.png" alt="Strength and Values" />
          </div>
        </section>
      </div>
      <CTA />
    </>
  );
};

export default AboutUs;
