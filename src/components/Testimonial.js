import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Carousel from "./Carousel";

const Testimonial = () => {
  return (
    <TestimonialPage>
      <TestimonialHeader>
        <Typography
          variant="h4"
          fontWeight="bold"
          className="testimonialHeader"
        >
          WHAT THEY SAY
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
  height: fit-content;
  background-color: #616161;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1000px) {
    height: 100vh;
  }
`;

const TestimonialHeader = styled.div`
  color: #fafafa;
  text-align: center;
  margin-top: 3rem;
  @media screen and (min-width: 1000px) {
    margin-top: 6rem;
  }
  @media screen and (max-width: 1000px) {
    .testimonialHeader {
      font-size: 2.2rem;
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
  color: white;
`;

export default Testimonial;
