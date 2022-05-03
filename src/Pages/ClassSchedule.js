import { Typography } from "@mui/material";
import React from "react";
import scheduleImg from "../assets/schedule.png";
import { motion } from "framer-motion";
import "./styles/ClassSchedule.css";

const ClassSchedule = () => {
  return (
    <motion.div
      className="class-schedule-container"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
        marginTop="4rem"
        className="classSchedule"
      >
        CLASS SCHEDULE
      </Typography>
      <img
        src={scheduleImg}
        alt="Victory Tae Kwon Do class schedule"
        className="schedule"
      />
    </motion.div>
  );
};

export default ClassSchedule;
