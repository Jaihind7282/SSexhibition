import React from "react";
import "./ExhibitionTypes.css";

const ExhibitionTypes = () => {
  const exhibitions = [
    {
      title: "Modern Art",
      image: "images/modernart.webp",
      description:
        "Explore the cutting-edge world of modern art, featuring innovative works from global artists.",
    },
    {
      title: "Historical Artifacts",
      image: "images/Historicalartifacts.avif",
      description:
        "Step back in time to view artifacts and relics that showcase our shared history.",
    },
    {
      title: "Interactive Exhibitions",
      image: "images/Interactive Exhibitions.webp",
      description:
        "Engage with interactive displays that make learning and experiencing art fun and immersive.",
    },
    {
      title: "Sculpture Garden",
      image: "images/Sculpture Garden.jpg",
      description:
        "Experience a tranquil setting filled with stunning sculptures from renowned artists.",
    },
    {
      title: "Photography Showcase",
      image: "images/Photography Showcase.jpg",
      description:
        "Discover a breathtaking collection of photographs capturing unique moments in time.",
    },
    {
      title: "Cultural Heritage",
      image: "images/Cultural Heritage.jpg",
      description:
        "Dive into the rich cultural heritage of various civilizations and their timeless traditions.",
    },
  ];

  return (
    <div className="exhibitions-container">
      {exhibitions.map((exhibition, index) => (
        <div className="exhibition-item" key={index}>
          <img
            src={exhibition.image}
            alt={exhibition.title}
            className="exhibition-image"
          />
          <div className="exhibition-info">
            <h2 className="exhibition-title">{exhibition.title}</h2>
            <p className="exhibition-description">{exhibition.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExhibitionTypes;
