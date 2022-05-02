import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>
        <Typography
          variant="h5"
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
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    .paragraph {
      width: 22rem;
      text-align: justify;
    }
    .aboutHeader {
      font-size: 1.2rem;
    }
  }
`;

const AboutHeader = styled.div``;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  margin-top: 3rem;
`;

export default About;
