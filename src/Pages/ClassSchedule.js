import { Paper } from "@mui/material";
import React from "react";
import scheduleImg from "../assets/schedule.png";
import { Fade } from "react-awesome-reveal";
import "./styles/ClassSchedule.css";

const ClassSchedule = () => {
  return (
    <Fade up>
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
