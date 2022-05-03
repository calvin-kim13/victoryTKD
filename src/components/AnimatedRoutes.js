import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Instructors from "../Pages/Instructors";
import ClassSchedule from "../Pages/ClassSchedule";
import Contact from "../Pages/Contact";
import TinyHero from "../Pages/TinyHero";
import Children from "../Pages/Children";
import TeenAdult from "../Pages/TeenAdult";
import Weapons from "../Pages/Weapons";
import Sparring from "../Pages/Sparring";
import EliteCompetition from "../Pages/EliteCompetition";
import OurClasses from "../Pages/OurClasses";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="classes" element={<OurClasses />} />
        <Route path="/tiny-heroes" element={<TinyHero />} />
        <Route path="/children" element={<Children />} />
        <Route path="/teen-adult" element={<TeenAdult />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/sparring" element={<Sparring />} />
        <Route path="/elite-competition" element={<EliteCompetition />} />
        <Route path="/class-schedule" element={<ClassSchedule />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
