import React from "react";
import Trial from "../components/Trial";
import ContactHome from "../components/ContactHome";
import { motion } from "framer-motion";
import Testimonial from "../components/Testimonial";
import LandingPage from "../components/LandingPage";

const Home = () => {
  return (
    <motion.div
      id="home"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <LandingPage />
      <Trial />
      <Testimonial />
      <ContactHome />
    </motion.div>
  );
};

export default Home;
