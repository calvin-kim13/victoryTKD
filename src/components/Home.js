import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Trial from "./Trial";
import DownArrow from "./DownArrow";
import Testimonial from "./Testimonial";
import Signup from "./Signup";

const Home = () => {
  return (
    <HomeContainer id="home">
      <HomeContent>
        <HomeTextWrapper>
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            className="victory-tkd"
            fontWeight="bold"
          >
            VICTORY <br /> TAEKWONDO
          </Typography>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            className="three-values"
            // fontWeight="bold"
          >
            BETTER ATTITUDE <br />
            BETTER DISCIPLINE <br />
            BETTER RESPECT
          </Typography>
        </HomeTextWrapper>
        <ButtonWrapper>
          <Button
            variant="contained"
            size="large"
            style={{ marginRight: "1.5rem" }}
            onClick={() => window.location.replace("#signup")}
            sx={{ height: 50, width: 150 }}
          >
            SIGN UP
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => window.location.replace("/#trial-info")}
            sx={{ height: 50, width: 150 }}
          >
            LEARN MORE
          </Button>
        </ButtonWrapper>
        <DownArrow className="down-arrow" />
      </HomeContent>
      <Trial />
      <Testimonial />
      <Signup />
    </HomeContainer>
  );
};

const HomeContainer = styled.div``;

const HomeContent = styled.div`
  // height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  .down-arrow {
    margin-bottom: 1.7rem;
    animation: animateDown infinite 1.5s;
  }
`;

const HomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  .signup {
    text-decoration: none;
    color: inherit;
  }
  .learn-more {
    text-decoration: none;
    color: inherit;
  }
`;

export default Home;
