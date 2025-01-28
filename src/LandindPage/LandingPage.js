import React from "react";
import ImageSlider from "./ImageSlider";
import CTA from "./CTA";
import Stats from "./Stats";
import ExhibitionTypes from "./ExhibitionTypes";
import VisionMission from "./VisionMission";
import ProjectsExecuted from "./ProjectsExecuted";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <>
      <ImageSlider />
      <CTA />
      <Stats />
      <ExhibitionTypes />
      <VisionMission />
      <ProjectsExecuted />
      <Testimonials />
    </>
  );
};

export default LandingPage;
