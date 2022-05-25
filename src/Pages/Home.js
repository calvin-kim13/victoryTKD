import React from "react";
import Trial from "../components/Trial";
import Contact from "../Pages/Contact";
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
        <Contact />
      </Fade>
    </>
  );
};

export default Home;
