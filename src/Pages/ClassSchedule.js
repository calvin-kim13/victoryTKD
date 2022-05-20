import { Paper, Typography } from "@mui/material";
import React from "react";
import scheduleImg from "../assets/schedule.png";
import Zoom from "react-reveal/Zoom";
import "./styles/ClassSchedule.css";

const ClassSchedule = () => {
  return (
    <Zoom>
      <Paper elevation={8} style={{ backgroundColor: "#f5f5f5" }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          textAlign="center"
          letterSpacing="0.2rem"
          fontWeight="bold"
          padding="2rem"
        >
          CLASS SCHEDULE
        </Typography>
      </Paper>
      <div className="class-schedule-container">
        <img
          src={scheduleImg}
          alt="Victory Tae Kwon Do class schedule"
          className="schedule"
        />
      </div>
    </Zoom>
  );
};

export default ClassSchedule;
