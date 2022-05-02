import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import children from "../assets/children.png";
import Button from "../components/Button";

const Children = () => {
  return (
    <ChildrenContainer>
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
        marginTop="2rem"
      >
        CHILDREN
      </Typography>
      <ChildrenContent>
        <Typography variant="body1" gutterBottom className="description">
          Children's Class is for those ages 6-12 years old. This popular class
          helps students develop confidence, discipline, and respect. They also
          learn self-defense techniques to protect themselves from dangerous
          situations.
          <br />
          <br /> This class promotes physical and character development to help
          children grow into healthy and strong-minded individuals.
        </Typography>
        <ChildrenImage>
          <img src={children} alt="Children" />
        </ChildrenImage>
      </ChildrenContent>
      <BackButton>
        <Button
          className="classes-btn"
          onClick={() => window.location.replace("/classes")}
        >
          Back to Classes
        </Button>
      </BackButton>
    </ChildrenContainer>
  );
};

const ChildrenContainer = styled.div`
  margin-top: 3rem;
`;
const ChildrenContent = styled.div`
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
const ChildrenImage = styled.div`
  margin-top: 3rem;
`;

const BackButton = styled.div`
  text-align: center;
  padding: 1rem;
  text-align: center;
  padding: 1rem;
  margin-bottom: 4rem;
  margin-top: 2rem;
  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export default Children;
