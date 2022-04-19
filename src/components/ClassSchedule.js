import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import scheduleImg from "../assets/schedule.png";

const ClassSchedule = () => {
  return (
    <ClassScheduleContainer>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
        marginTop="2rem"
      >
        CLASS SCHEDULE
      </Typography>
      <img
        src={scheduleImg}
        alt="Image of Victory Tae Kwon Do class schedule"
        className="schedule"
      />
    </ClassScheduleContainer>
  );
};

const ClassScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    width: 70rem;
    height: 40rem;
    border: 5px solid black;
  }
  .schedule {
    margin-top: 2rem;
  }
`;

export default ClassSchedule;
