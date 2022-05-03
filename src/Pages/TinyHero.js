import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import tinyHero from "../assets/tinyHero.png";
import Button from "../components/Button";
import "./styles/TinyHero.css";
import { motion } from "framer-motion";

const TinyHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
        marginTop="2rem"
      >
        TINY HEROES
      </Typography>
      <TinyHeroContent>
        <Typography variant="body1" gutterBottom className="description">
          Tiny Heroes is a specialized program for 4-5 year olds. This popular
          class helps students develop focus, discipline, and respect. Students
          learn how to follow instructions, socialize with others, and pay
          attention. <br />
          <br /> Parents who enroll their kids see remarkable results and enjoy
          watching them improve physically and mentally. <br />
          <br /> Plus, the Tiny Heroes have a blast!
        </Typography>
        <TinyHeroImage>
          <img src={tinyHero} alt="Tiny Hero" />
        </TinyHeroImage>
      </TinyHeroContent>
      <BackButton>
        <Button
          className="classes-btn"
          onClick={() => window.location.replace("/classes")}
        >
          Back to Classes
        </Button>
      </BackButton>
    </motion.div>
  );
};

const TinyHeroContent = styled.div`
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
const TinyHeroImage = styled.div``;

const BackButton = styled.div`
  text-align: center;
  padding: 1rem;
  margin-bottom: 4rem;
  margin-top: 2rem;
  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export default TinyHero;
