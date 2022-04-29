import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import React from "react";
import elitecomp from "../assets/elitecomp.png";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const TinyHero = () => {
  return (
    <EliteCompetitionContainer>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
      >
        Elite Competition
      </Typography>
      <EliteCompetitionContent>
        <Typography variant="body1" gutterBottom className="description">
          Elite Competition Program is an extra class designed to prepare
          students for sparring competitions. This exclusive class is taught by
          Grand Master Kim, a former National Sparring Champion in South Korea.{" "}
          <br />
          <br />
          Students learn advanced sparring skills and techniques, which further
          develop their self-defense. <br />
          <br /> Our students compete and win in State, Nationals, and World
          Tournaments. Those interested in becoming Taekwondo Olympic Champions
          are highly encouraged to join.
        </Typography>
        <EliteCompetitionImage>
          <img src={elitecomp} alt="Elite Competition" />
        </EliteCompetitionImage>
      </EliteCompetitionContent>
      <BackButton>
        <Button
          variant="contained"
          startIcon={<ArrowLeftIcon />}
          onClick={() => window.location.replace("/classes")}
        >
          Back to Classes
        </Button>
      </BackButton>
    </EliteCompetitionContainer>
  );
};

const EliteCompetitionContainer = styled.div``;
const EliteCompetitionContent = styled.div`
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
const EliteCompetitionImage = styled.div``;

const BackButton = styled.div`
  text-align: center;
  padding: 1rem;
  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export default TinyHero;
