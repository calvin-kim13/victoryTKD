import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import teenAdult from "../assets/teenAdult.png";
import Button from "../components/Button";

const TeenAdult = () => {
  return (
    <TeenAdultContainer>
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
        marginTop="2rem"
      >
        TEENS & ADULTS
      </Typography>
      <TeenAdultContent>
        <Typography variant="body1" gutterBottom className="description">
          Teens & Adults Class is for those ages 13 and up. This exclusive
          program promotes weight loss, physical fitness, flexibility, and
          self-defense.
          <br />
          <br /> Through challenging, yet fun and energizing workouts, students
          are able to maintain a healthy weight. Furthermore, they learn
          practical self-defense techniques to protect themselves from dangerous
          situations.
        </Typography>
        <TeenAdultImage>
          <img src={teenAdult} alt="Teen Adult" />
        </TeenAdultImage>
      </TeenAdultContent>
      <BackButton>
        <Button
          className="classes-btn"
          onClick={() => window.location.replace("/classes")}
        >
          Back to Classes
        </Button>
      </BackButton>
    </TeenAdultContainer>
  );
};

const TeenAdultContainer = styled.div`
  margin-top: 3rem;
`;
const TeenAdultContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .description {
    width: 25rem;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;
const TeenAdultImage = styled.div``;

const BackButton = styled.div`
  text-align: center;
  padding: 1rem;
  margin-bottom: 4rem;
  margin-top: 2rem;
  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export default TeenAdult;
