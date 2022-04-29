import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import React from "react";
import sparring from "../assets/sparring.png";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const Sparring = () => {
  return (
    <SparringContainer>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
      >
        Sparring
      </Typography>
      <SparringContent>
        <Typography variant="body1" gutterBottom className="description">
          Sparring Program is an extra class designed to teach students how to
          protect themselves through physical contact. They learn different
          strategies and techniques to improve their sparring skills, such as
          footwork and timing. <br />
          <br /> This class is an effective and practical way for students to
          develop confidence and self-defense skills.
        </Typography>
        <SparringImage>
          <img src={sparring} alt="Sparring" />
        </SparringImage>
      </SparringContent>
      <BackButton>
        <Button
          variant="contained"
          startIcon={<ArrowLeftIcon />}
          onClick={() => window.location.replace("/classes")}
        >
          Back to Classes
        </Button>
      </BackButton>
    </SparringContainer>
  );
};

const SparringContainer = styled.div``;
const SparringContent = styled.div`
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
const SparringImage = styled.div``;

const BackButton = styled.div`
  text-align: center;
  padding: 1rem;
  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export default Sparring;
