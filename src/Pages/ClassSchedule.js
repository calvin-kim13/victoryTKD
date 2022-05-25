import { Paper, Typography } from "@mui/material";
import React from "react";
import scheduleImg from "../assets/schedule.png";
import Fade from "react-reveal/Fade";
import "./styles/ClassSchedule.css";

const ClassSchedule = () => {
  return (
    <Fade left>
      <Paper elevation={8} style={{ backgroundColor: "#f5f5f5" }}>
        <div className="schedule-header">CLASS SCHEDULE</div>
      </Paper>
      <div className="class-schedule-container">
        <img
          src={scheduleImg}
          alt="Victory Tae Kwon Do class schedule"
          className="schedule"
        />
      </div>
    </Fade>
  );
};

export default ClassSchedule;
