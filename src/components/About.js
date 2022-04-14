import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import img from "../assets/flag.png";

const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          textAlign="center"
          letterSpacing="0.4rem"
          fontWeight="bold"
        >
          What is Victory Tae Kwon Do?
        </Typography>
      </AboutHeader>
      <AboutContent>
        <Typography variant="body1" gutterBottom>
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
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  //   background-image: url(${img});
  //   background-position: top;
  //   background-repeat: no-repeat;
  //   background-size: 50rem 50rem;
  //   height: 42.7rem;
`;

const AboutHeader = styled.div`
  margin-top: 2rem;
  // border-bottom: 1px solid black;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  margin: 4rem auto;
`;

export default About;
