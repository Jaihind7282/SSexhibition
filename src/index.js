import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import LandingPage from "./LandindPage/LandingPage";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import SolutionPage from "./Routes/SolutionPage";
import OurProjects from "./Routes/OurProjects";
import AboutUs from "./Routes/AboutUs";
import ContactUs from "./Routes/ContactUS";
import OurClients from "./Routes/OurClients";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/solutions" element={<SolutionPage />} />
      <Route path="/projects" element={<OurProjects />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/client" element={<OurClients />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
