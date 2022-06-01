import React from "react";
import Trial from "../components/Trial";
import Contact from "../Pages/Contact";
import Testimonial from "../components/Testimonial";
import LandingPage from "../components/LandingPage";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <Fade up>
        <LandingPage />
      </Fade>
      <Fade up>
        <Trial />
      </Fade>
      <Fade up>
        <Testimonial />
      </Fade>
      <Fade up>
        <Contact />
      </Fade>
    </>
  );
};

export default Home;
