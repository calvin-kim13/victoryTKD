import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import sparring from "../assets/sparring.png";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Sparring = () => {
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
        SPARRING
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
          <img src={sparring} alt="Sparring" className="sparring-img" />
        </SparringImage>
      </SparringContent>
      <BackButton>
        <Button className="classes-btn" onClick={() => navigate(-1)}>
          Back to Classes
        </Button>
      </BackButton>
    </motion.div>
  );
};

const SparringContent = styled.div`
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
const SparringImage = styled.div`
  @media screen and (max-width: 700px) {
    .sparring-img {
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

export default Sparring;
