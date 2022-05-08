import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import "./styles/About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <AboutHeader>
        <Typography
          variant="h4"
          marginTop="6rem"
          gutterBottom
          component="div"
          textAlign="center"
          letterSpacing="0.2rem"
          fontWeight="bold"
          className="aboutHeader"
        >
          WHAT IS VICTORY TAE KWON DO?
        </Typography>
      </AboutHeader>
      <AboutContent className="paragraph">
        <Typography variant="subtitle2" gutterBottom>
          Taekwondo is a Korean martial art that strengthens the mind and body
          through disciplined training. Tae ("foot"), Kwon ("fist"), and Do
          ("way") translates to "the way of the foot and fist." <br /> <br />
          At Victory Taekwondo, we are committed to helping you develop a better
          attitude, discipline, and respect. Whether you are a kid, teen, or
          adult, it is important to have a positive “YES, I CAN” attitude
          because it stimulates self-confidence and personal growth. <br />{" "}
          <br />
          We hope to inspire you to achieve your dreams and become future
          leaders not just in Taekwondo, but also in life.
        </Typography>
      </AboutContent>
    </motion.div>
  );
};

const AboutHeader = styled.div`
  @media screen and (max-width: 700px) {
    .aboutHeader {
      font-size: 0.9rem;
    }
  }
  @media screen and (min-width: 700px) {
    .aboutHeader {
      font-size: 1.2rem;
    }
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32rem;
  margin-top: 3rem;
  @media screen and (max-width: 700px) {
    width: 18rem;
    font-size: 0.2rem;
    text-align: justify;
  }
  @media screen and (min-width: 700px) {
    width: 22rem;
    text-align: justify;
  }
  @media screen and (min-width: 1440px) {
    width: 35rem;
  }
`;

export default About;
