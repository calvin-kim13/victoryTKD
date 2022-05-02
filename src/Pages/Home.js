import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import Trial from "../components/Trial";
import DownArrow from "../components/DownArrow";
import Testimonial from "../components/Testimonial";
import Contact from "./Contact";
import video from "../assets/video.mp4";
import CustomBtn from "../components/Button";

const Home = () => {
  return (
    <HomeContainer id="home">
      <HomeContent>
        <video src={video} autoPlay loop muted />
        <HomeTextWrapper>
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            className="victory-tkd"
            fontWeight="bold"
            color="#fafafa"
          >
            VICTORY <br /> TAEKWONDO
          </Typography>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            className="three-values"
            color="#eeeeee"
          >
            BETTER ATTITUDE <br />
            BETTER DISCIPLINE <br />
            BETTER RESPECT
          </Typography>
        </HomeTextWrapper>
        <ButtonWrapper>
          <a href="#contact">
            <CustomBtn className="solid-btn">Sign up</CustomBtn>
          </a>
          <a href="#trial-info">
            <CustomBtn className="outline-btn">Learn More</CustomBtn>
          </a>
        </ButtonWrapper>
        <div className="arrow-wrapper">
          <DownArrow className="down-arrow" />
        </div>
      </HomeContent>
      <Trial />
      <Testimonial />
      <Contact />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  color: #424242;
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85vh;
  background: rgba(0, 0, 0, 0.8);
  video {
    z-index: -1;
    height: 85vh;
    width: 100%;
    position: absolute;
    object-fit: fill;
    opacity: 0.6;
  }
  .arrow-wrapper {
    margin-top: 6rem;
  }
  .down-arrow {
    animation: animateDown infinite 1.5s;
    color: white;
  }
  @media screen and (max-width: 1000px) {
    video {
      object-fit: cover;
    }
  }
`;

const HomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1000px) {
    .victory-tkd {
      font-size: 3.5rem;
    }
    .three-values {
      font-size: 1.2rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

export default Home;
