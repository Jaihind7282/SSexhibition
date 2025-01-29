import React from "react";
import "./OurClients.css";
import Testimonials from "../LandindPage/Testimonials";
import CTA from "../LandindPage/CTA";

const clients = [
  {
    id: 1,
    image: "images/aps.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    image: "images/abb.jpg",
  },
  {
    id: 3,
    image: "images/ronald-logo.jpg",
  },
  {
    id: 4,
    image: "images/map-my-india-logo.jpg",
  },
  {
    id: 5,
    image: "images/Hekal-logo.jpg",
  },
  {
    id: 6,
    image: "images/cabcon.jpg",
  },
  {
    id: 7,
    image: "images/pan-east-logo.jpg",
  },
  {
    id: 8,
    image: "images/sands-logi.jpg",
  },
  {
    id: 9,
    image: "images/Neocab-logo.jpg",
  },
  {
    id: 10,
    image: "images/sant-rubbers-logo.jpg",
  },
  {
    id: 11,
    image: "images/anjali-granite-logo.jpg",
  },
  {
    id: 12,
    image: "images/nova-logo.jpg",
  },
];

const OurClients = () => {
  return (
    <>
      <Testimonials />
      <div className="clients-container">
        <h1 className="clients-title">Our Clients</h1>
        <div className="clients-list">
          {clients.map((client) => (
            <div key={client.id} className="client-card">
              <img src={client.image} alt="Client" className="client-image" />
            </div>
          ))}
        </div>
      </div>
      <CTA />
    </>
  );
};

export default OurClients;
