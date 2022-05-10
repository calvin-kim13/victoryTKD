import { Typography } from "@mui/material";
import React from "react";
import scheduleImg from "../assets/schedule.png";
import { motion } from "framer-motion";
import "./styles/ClassSchedule.css";
import styled from "@emotion/styled";

const ClassSchedule = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <ScheduleHeader>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          textAlign="center"
          letterSpacing="0.2rem"
          fontWeight="bold"
        >
          CLASS SCHEDULE
        </Typography>
      </ScheduleHeader>
      <div className="class-schedule-container">
        <img
          src={scheduleImg}
          alt="Victory Tae Kwon Do class schedule"
          className="schedule"
        />
      </div>
    </motion.div>
  );
};

const ScheduleHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  color: #252831;
  border-bottom: 1px solid #252831;
  max-width: 80%;
  margin: 2rem auto 0;
  padding: 0.2rem;
  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 30%;
  }
  @media screen and (min-width: 1440px) {
    max-width: 20%;
  }
`;

export default ClassSchedule;
