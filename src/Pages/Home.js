import React from "react";
import Trial from "../components/Trial";
import ContactHome from "../components/ContactHome";
import Testimonial from "../components/Testimonial";
import LandingPage from "../components/LandingPage";
import Zoom from "react-reveal/Zoom";

const Home = () => {
  return (
    <Zoom>
      <LandingPage />
      <Trial />
      <Testimonial />
      <ContactHome />
    </Zoom>
  );
};

export default Home;
