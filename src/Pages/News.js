import React from "react";
import { motion } from "framer-motion";
import NewClassSchedule from "../components/News/NewClassSchedule";
import NewCustomizedUniforms from "../components/News/NewCustomizedUniforms";
import ExtraClasses from "../components/News/ExtraClasses";
import FakeEmail from "../components/News/FakeEmail";
import Zoom from "../components/News/Zoom";

const News = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <NewClassSchedule />
      <NewCustomizedUniforms />
      <ExtraClasses />
      <FakeEmail />
      <Zoom />
    </motion.div>
  );
};

export default News;
