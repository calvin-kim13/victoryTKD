import React from "react";
import Trial from "../components/Trial";
import Contact from "../Pages/Contact";
import Testimonial from "../components/Testimonial";
import LandingPage from "../components/LandingPage";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
      <Fade>
        <LandingPage />
      </Fade>
      <Fade>
        <Trial />
      </Fade>
      <Fade>
        <Testimonial />
      </Fade>
      <Fade>
        <Contact />
      </Fade>
    </>
  );
};

export default Home;
