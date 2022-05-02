import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";
import React from "react";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
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
        <Card className="card" sx={{ height: "22rem", width: "20rem" }}>
          <div className="quote-testimony">
            <Typography
              variant="overline"
              textAlign="center"
              lineHeight="1.7rem"
              padding="2rem 2rem 0 2rem"
              marginBottom=".5rem"
            >
              It's a great studio. At first, our son didn't want to join, but
              now he rushes to class. They have an awesome staff and the way
              they teach is unique!
            </Typography>
            <div className="quote-wrapper">
              <FormatQuoteRoundedIcon
                sx={{ fontSize: "3rem", color: "#9575cd" }}
              />
            </div>
          </div>
          <div className="testimony1">
            <Typography
              variant="overline"
              fontSize="1.2rem"
              fontWeight="bold"
              textAlign="center"
            >
              Ana Gutierrez
            </Typography>
            <Typography variant="caption" display="block" textAlign="center">
              March 18, 2018
            </Typography>
          </div>
        </Card>
        <Card className="card" sx={{ height: "22rem", width: "20rem" }}>
          <div className="quote-testimony">
            <Typography
              variant="overline"
              textAlign="center"
              lineHeight="1.7rem"
              padding="2rem 2rem 0 2rem"
              marginBottom=".5rem"
            >
              If you're looking to teach your kids discipline, respect, and
              self-defense while having fun, Victory Taekwondo is the best place
              to go!
            </Typography>
            <div className="quote-wrapper">
              <FormatQuoteRoundedIcon
                sx={{ fontSize: "3rem", color: "#4dd0e1" }}
              />
            </div>
          </div>
          <div className="testimony2">
            <Typography
              variant="overline"
              fontSize="1.2rem"
              fontWeight="bold"
              textAlign="center"
            >
              JL Cotton
            </Typography>
            <Typography variant="caption" display="block" textAlign="center">
              September 21, 2017{" "}
            </Typography>
          </div>
        </Card>
        <Card className="card" sx={{ height: "22rem", width: "20rem" }}>
          <div className="quote-testimony">
            <Typography
              variant="overline"
              textAlign="center"
              lineHeight="1.7rem"
              padding="2rem 2rem 0 2rem"
              marginBottom=".5rem"
            >
              The best thing to ever happen to my son. Bring your kids to
              Victory Taekwondo. You will not be disappointed!
            </Typography>
            <div className="quote-wrapper">
              <FormatQuoteRoundedIcon
                sx={{ fontSize: "3rem", color: "#4db6ac" }}
              />
            </div>
          </div>
          <div className="testimony3">
            <Typography
              variant="overline"
              fontSize="1.2rem"
              fontWeight="bold"
              textAlign="center"
            >
              Veronica M.
            </Typography>
            <Typography variant="caption" display="block" textAlign="center">
              June 10, 2019
            </Typography>
          </div>
        </Card>
      </TestimonialContent>
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
    height: 90vh;
  }
`;

const TestimonialHeader = styled.div`
  color: #fafafa;
  text-align: center;
  margin-top: 6rem;
  @media screen and (max-width: 1000px) {
    .testimonialHeader {
      font-size: 2.2rem;
      padding: 3rem;
    }
  }
`;

const TestimonialContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 6rem;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .quote-testimony {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .quote-wrapper {
    display: flex;
    justify-content: center;
  }
  .testimony1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #9575cd;
    width: 100%;
    padding: 1.4rem;
  }
  .testimony2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4dd0e1;
    width: 100%;
    padding: 1.4rem;
  }
  .testimony3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4db6ac;
    width: 100%;
    padding: 1.4rem;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    margin-top: 0;
    align-items: center;
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
