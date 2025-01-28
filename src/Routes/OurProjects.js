import React from "react";
import "./OurProjects.css";
import CTA from "../LandindPage/CTA";

const OurProjects = () => {
  const projects = [
    {
      title: "AET DISPLAYS",
      image: "images/AET.png", // Replace with your image URL
    },
    {
      title: "ALSTONE",
      image: "images/ALSTONE.png", // Replace with your image URL
    },
    {
      title: "ALUTECT",
      image: "images/Alutech pannels.png", // Replace with your image URL
    },
    {
      title: "BML NUNJAL",
      image: "images/BML.png", // Replace with your image URL
    },
    {
      title: "CROSS BOND",
      image: "images/Crossbond.png", // Replace with your image URL
    },
    {
      title: "SPOTON COATINGS",
      image: "images/SPOTON COATINGS PVT LTD..png", // Replace with your image URL
    },
    {
      title: "NPT PAPPERS",
      image: "images/Npt.png",
    },
    {
      title: "KAJARIYA",
      image: "images/kajariya.png", // Replace with your image URL
    },
    {
      title: "DURIAN",
      image: "images/Durian.png", // Replace with your image URL
    },
    {
      title: "PAYAL GROUP",
      image: "images/Payal Group.png", // Replace with your image URL
    },
  ];

  return (
    <>
      <div className="our-projects-container">
        {/* Introduction Section */}
        <section className="projects-introduction">
          <h2>Our Projects</h2>
          <p>
            We have successfully executed a variety of exhibitions and
            installations across different sectors. Our projects showcase
            creativity, innovation, and cutting-edge technology. Here are some
            of our most notable projects that we have delivered with passion and
            precision.
          </p>
          <div className="tags">
            <span className="tag">Exhibition</span>
            <span className="tag">Design</span>
            <span className="tag">Innovation</span>
            <span className="tag">Technology</span>
          </div>
        </section>

        {/* Projects List */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <CTA />
    </>
  );
};

export default OurProjects;
