import React from "react";
import "./SolutionPage.css";
import CTA from "../LandindPage/CTA";

const SolutionPage = () => {
  const solutions = [
    {
      title: "Exhibition",
      image: "images/exhibitionstall3.jpg", // Replace with your image URL
      description:
        "Exhibitions are an ideal platform to showcase innovative designs and interactive displays. We specialize in creating visually captivating exhibitions that engage visitors and leave a lasting impression.",
    },
    {
      title: "Events",
      image: "images/Events.jpg", // Replace with your image URL
      description:
        "We manage a variety of events, from corporate gatherings to live entertainment shows. Our team ensures that every event is meticulously planned and executed, making it an unforgettable experience for attendees.",
    },
    {
      title: "Museum",
      image: "images/Museum.jpg", // Replace with your image URL
      description:
        "Our museum solutions provide immersive experiences that engage visitors with art, history, and culture. We offer tailored museum designs, installations, and exhibits that tell compelling stories.",
    },
    {
      title: "Retail",
      image: "images/Retail.jpg", // Replace with your image URL
      description:
        "We create exceptional retail environments that enhance customer experiences. From concept to execution, we design engaging retail spaces that drive sales and build brand loyalty.",
    },
    {
      title: "Interiors",
      image: "images/exhibitionstall5.jpg", // Replace with your image URL
      description:
        "Our interior design solutions focus on creating functional, aesthetic, and welcoming spaces. We blend innovative design with practicality to create interiors that meet the needs of your business or home.",
    },
    {
      title: "Branding", // New Solution Added
      image: "images/exhibitionstall4.jpg", // Replace with your image URL
      description:
        "Our branding solutions help businesses create a strong identity that resonates with their target audience. From logo design to full-scale brand strategy, we ensure that your brand communicates effectively and stands out in the market.",
    },
  ];

  return (
    <>
      <div className="solution-page-container">
        <h2 className="solution-page-heading">Our Solutions</h2>
        <div className="solutions-container">
          {solutions.map((solution, index) => (
            <div className="solution-item" key={index}>
              <img
                src={solution.image}
                alt={solution.title}
                className="solution-image"
              />
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
      <CTA />
    </>
  );
};

export default SolutionPage;
