import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import elitecomp from "../assets/elitecomp.png";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TinyHero = () => {
  const navigate = useNavigate();
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
        ELITE COMPETITION
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
          <img
            src={elitecomp}
            alt="Elite Competition"
            className="eliteComp-img"
          />
        </EliteCompetitionImage>
      </EliteCompetitionContent>
      <BackButton>
        <Button className="classes-btn" onClick={() => navigate(-1)}>
          Back to Classes
        </Button>
      </BackButton>
    </motion.div>
  );
};

const EliteCompetitionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .description {
    width: 25rem;
  }
  @media screen and (max-width: 700px) {
    .description {
      width: 18rem;
    }
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;
const EliteCompetitionImage = styled.div`
  @media screen and (max-width: 700px) {
    .eliteComp-img {
      width: 20rem;
    }
  }
`;

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
