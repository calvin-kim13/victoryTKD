import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import teenAdult from "../assets/teenAdult.png";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TeenAdult = () => {
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
          <img src={teenAdult} alt="Teen Adult" className="teen-img" />
        </TeenAdultImage>
      </TeenAdultContent>
      <BackButton>
        <Button className="classes-btn" onClick={() => navigate(-1)}>
          Back to Classes
        </Button>
      </BackButton>
    </motion.div>
  );
};

const TeenAdultContent = styled.div`
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
const TeenAdultImage = styled.div`
  @media screen and (max-width: 700px) {
    .teen-img {
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

export default TeenAdult;
