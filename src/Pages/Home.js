import React from "react";
import Trial from "../components/Trial";
import ContactHome from "../components/ContactHome";
import Testimonial from "../components/Testimonial";
import LandingPage from "../components/LandingPage";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <Fade left>
        <LandingPage />
      </Fade>
      <Fade right>
        <Trial />
      </Fade>
      <Fade left>
        <Testimonial />
      </Fade>
      <Fade right>
        <ContactHome />
      </Fade>
    </>
  );
};

export default Home;
