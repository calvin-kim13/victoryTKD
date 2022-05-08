import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Carousel from "./Carousel";

const Testimonial = () => {
  return (
    <TestimonialPage>
      {/* <img className="stone-img" src={stone} alt="stone" /> */}
      <TestimonialHeader>
        <Typography
          variant="h5"
          fontWeight="bold"
          className="testimonialHeader"
        >
          WHAT THEY SAY...
        </Typography>
      </TestimonialHeader>
      <Carousel />
      <ArrowWrapper>
        <KeyboardArrowDownIcon fontSize="large" className="down-arrow" />
      </ArrowWrapper>
    </TestimonialPage>
  );
};

const TestimonialPage = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: rgba(0, 0, 0); */
  .stone-img {
    position: absolute;
    width: 100%;
    height: 90vh;
    opacity: 0.4;
    object-fit: cover;
  }
  @media screen and (max-width: 1000px) {
    height: 100vh;
    .stone-img {
      height: 100vh;
    }
  }
`;

const TestimonialHeader = styled.div`
  color: #fff;
  z-index: 10;
  text-align: center;
  margin-top: 3rem;
  @media screen and (min-width: 1000px) {
    margin-top: 6rem;
  }
  @media screen and (max-width: 1000px) {
    .testimonialHeader {
      padding: 3rem;
    }
  }
`;

const ArrowWrapper = styled.div`
  text-align: center;
  padding: 5rem;

  .down-arrow {
    animation: animateDown infinite 1.5s;
  }
  color: #fff;
`;

export default Testimonial;
