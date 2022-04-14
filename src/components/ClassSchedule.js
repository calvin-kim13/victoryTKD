import styled from "@emotion/styled";
import React from "react";
import scheduleImg from "../assets/schedule.png";

const ClassSchedule = () => {
  return (
    <ClassScheduleContainer>
      <img
        src={scheduleImg}
        alt="Image of Victory Tae Kwon Do class schedule"
      />
    </ClassScheduleContainer>
  );
};

const ClassScheduleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70rem;
    height: 40rem;
    border: 5px solid black;
  }
`;

export default ClassSchedule;
