import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import scheduleImg from "../assets/schedule.png";

const ClassSchedule = () => {
  return (
    <ClassScheduleContainer>
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
        marginTop="2rem"
        className="classSchedule"
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
  height: 73vh;
  margin-bottom: 4rem;
  img {
    width: 55rem;
    height: 30rem;
    border: 5px solid black;
  }
  .schedule {
    margin-top: 2rem;
  }
  @media screen and (max-width: 1200px) {
    img {
      width: 40rem;
      height: 25rem;
    }
    .schedule {
      margin-top: 5rem;
    }
  }
  @media screen and (max-width: 800px) {
    .classSchedule {
      // font-size: 2rem;
    }
    img {
      width: 29rem;
      height: 18rem;
    }
  }
`;

export default ClassSchedule;
