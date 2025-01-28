import React from "react";
import "./ProjectsExecuted.css";
import {
  FaPaintBrush,
  FaVideo,
  FaCogs,
  FaDesktop,
  FaChair,
  FaPalette,
  FaTable,
  FaCalendarAlt,
  FaLayerGroup,
} from "react-icons/fa";

const ProjectsExecuted = () => {
  const projects = [
    {
      title: "Event Management",
      icon: <FaLayerGroup />,
      description:
        "Complete event planning and management from start to finish.",
    },
    {
      title: "Creative Design",
      icon: <FaPaintBrush />,
      description:
        "Innovative and artistic design solutions that captivate and inspire.",
    },
    {
      title: "Production Entertainment",
      icon: <FaVideo />,
      description:
        "End-to-end production solutions for live events and entertainment.",
    },
    {
      title: "Audio & Video Technology",
      icon: <FaCogs />,
      description:
        "Cutting-edge audio and video solutions for immersive experiences.",
    },
    {
      title: "Corporate Interiors",
      icon: <FaDesktop />,
      description:
        "Customized interior solutions for modern and functional corporate spaces.",
    },
    {
      title: "Bespoke Furniture",
      icon: <FaChair />,
      description:
        "Tailor-made furniture designed to meet specific needs and aesthetics.",
    },
    {
      title: "Murals",
      icon: <FaPalette />,
      description:
        "Large-scale artworks that create stunning visual environments.",
    },
    {
      title: "Dioramas Event",
      icon: <FaTable />,
      description:
        "Detailed and immersive diorama setups for exhibitions and events.",
    },
    {
      title: "Overlay Project",
      icon: <FaCalendarAlt />,
      description:
        "Event overlays and visual enhancements that make experiences stand out.",
    },
  ];

  return (
    <div className="project-1-container">
      <h2 className="projects-1-heading">Projects Executed</h2>
      {projects.map((project, index) => (
        <div className="project-1-item" key={index}>
          <div className="project-1-icon">{project.icon}</div>
          <h3 className="project-1-title">{project.title}</h3>
          <p className="project-1-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsExecuted;
