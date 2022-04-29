import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Testimonial = () => {
  return (
    <TestimonialPage>
      <TestimonialHeader>
        <Typography
          variant="h3"
          fontWeight="bold"
          className="testimonialHeader"
        >
          WHAT THEY SAY
        </Typography>
      </TestimonialHeader>
      <TestimonialContent>
        <Testimony>
          <Typography variant="h5" fontWeight="bold">
            Veronica M.
          </Typography>
          <Typography marginTop="1rem">June 10, 2019</Typography>
          <Typography
            textAlign="center"
            marginTop="2rem"
            marginBottom="2rem"
            lineHeight="1.7rem"
          >
            The best thing to ever happen to my son. Bring your kids to Victory
            Taekwondo. You will not be disappointed!
          </Typography>
          <FormatQuoteIcon fontSize="large" sx={{ fontSize: "5rem" }} />
        </Testimony>
        <Testimony>
          <Typography variant="h5" fontWeight="bold">
            Ana Gutierrez
          </Typography>
          <Typography marginTop="1rem">March 18, 2018</Typography>
          <Typography
            textAlign="center"
            marginTop="2rem"
            marginBottom="2rem"
            lineHeight="1.7rem"
          >
            It's a great studio. At first, our son didn't want to join, but now
            he rushes to class. They have an awesome staff and the way they
            teach is unique!
          </Typography>
          <FormatQuoteIcon fontSize="large" sx={{ fontSize: "5rem" }} />
        </Testimony>
        <Testimony>
          <Typography variant="h5" fontWeight="bold">
            JL Cotton
          </Typography>
          <Typography marginTop="1rem">September 21, 2017</Typography>
          <Typography
            textAlign="center"
            marginTop="2rem"
            marginBottom="2rem"
            lineHeight="1.7rem"
          >
            If you're looking to teach your kids discipline, respect, and
            self-defense while having fun, Victory Taekwondo is the best place
            to go!
          </Typography>
          <FormatQuoteIcon fontSize="large" sx={{ fontSize: "5rem" }} />
        </Testimony>
      </TestimonialContent>
      <ArrowWrapper>
        <KeyboardArrowDownIcon fontSize="large" className="down-arrow" />
      </ArrowWrapper>
    </TestimonialPage>
  );
};

const TestimonialPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin-top: 1rem;
  @media screen and (max-width: 1000px) {
    height: fit-content;
    margin-top: 7rem;
  }
`;

const TestimonialHeader = styled.div`
  padding: 3rem;
  text-align: center;
  @media screen and (max-width: 1000px) {
    .testimonialHeader {
      font-size: 2.2rem;
    }
  }
`;

const TestimonialContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 6rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    margin-top: 0;
    align-items: center;
  }
`;

const Testimony = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    margin-top: 3rem;
  }
`;

const ArrowWrapper = styled.div`
  text-align: center;
  .down-arrow {
    animation: animateDown infinite 1.5s;
  }
  margin-top: 6rem;
  @media screen and (max-width: 1000px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

export default Testimonial;
