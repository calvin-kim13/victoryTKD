import { Paper, Typography } from "@mui/material";
import React from "react";
import "./styles/NewClassSchedule.css";
import scheduleImg from "../../assets/schedule.png";

const NewClassSchedule = () => {
  return (
    <Paper elevation={12} className="new-class-schedule-wrapper">
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
        marginTop="2rem"
        borderBottom="2px solid black"
        paddingBottom="2rem"
      >
        NEW CLASS SCHEDULE
      </Typography>
      <div className="new-class-schedule-text">
        <Typography variant="overline">
          We will implement a new class schedule effective March 1, 2022. We
          moved around some belt levels to different classes to create more
          space so that we can offer more individualized attention to our
          students.
        </Typography>
      </div>
      <div className="new-class-schedule-img-wrapper">
        <img
          className="new-class-schedule-img"
          src={scheduleImg}
          alt="schedule"
        />
      </div>
    </Paper>
  );
};

export default NewClassSchedule;
