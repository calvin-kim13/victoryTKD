import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import Trial from "../components/Trial";
import DownArrow from "../components/DownArrow";
import ContactHome from "../components/ContactHome";
import video from "../assets/video.mp4";
import CustomBtn from "../components/Button";
import { motion } from "framer-motion";
import Testimonial from "../components/Testimonial";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <motion.div
      id="home"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <HomeContent>
        <Sidebar />
        <video src={video} autoPlay loop muted />
        <HomeTextWrapper>
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            className="victory-tkd"
            fontWeight="bold"
            color="#fff"
          >
            VICTORY <br /> TAEKWONDO
          </Typography>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            className="three-values"
            color="#fff"
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
      <ContactHome />
    </motion.div>
  );
};

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  video {
    z-index: -1;
    height: 100vh;
    width: 100%;
    position: absolute;
    object-fit: fill;
    opacity: 0.6;
  }
  .arrow-wrapper {
    padding: 1rem;
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
  @media screen and (max-width: 700px) {
    .victory-tkd {
      font-size: 3.5rem;
    }
    .three-values {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 700px) {
    .victory-tkd {
      font-size: 5rem;
    }
    .three-values {
      font-size: 1.2rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  margin-top: -5rem;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Home;
