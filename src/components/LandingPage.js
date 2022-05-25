import React from "react";
import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";
// import DownArrow from "../components/DownArrow";
import CustomBtn from "../components/Button";
import home from "../assets/contact1.png";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <Paper
        elevation={8}
        style={{ backgroundColor: "#f5f5f5" }}
        className="three-values-wrapper"
      >
        <Typography
          variant="overline"
          component="div"
          gutterBottom
          className="three-values"
          color="#212121"
          padding=".4rem"
        >
          <span className="color1">BETTER ATTITUDE</span> &#8226;{" "}
          <span className="color2">BETTER DISCIPLINE </span> &#8226;{" "}
          <span className="color3">BETTER RESPECT </span>
        </Typography>
      </Paper>
      <ImageTextWrapper>
        <div className="text-img-wrap">
          <TextButtonWrapper>
            {/* <Typography
              variant="overline"
              component="div"
              className="victory-tkd"
              fontWeight="bold"
              color="#212121"
              gutterBottom
            > */}
            <div className="victory-tkd">
              <span className="home-v">V</span>ICTORY <br />
              <span className="home-t">T</span>AEKWONDO{" "}
            </div>
            {/* </Typography> */}
            {/* <Typography
            variant="overline"
            component="div"
            gutterBottom
            className="three-values"
            color="#212121"
          >
            - BETTER ATTITUDE - BETTER DISCIPLINE - BETTER RESPECT -
          </Typography> */}
            <div className="home-description-wrapper">
              <Typography variant="caption" className="home-description">
                {/* <span className="color1">BETTER ATTITUDE</span> &#8226;{" "}
                <span className="color2">BETTER DISCIPLINE </span> &#8226;{" "}
                <span className="color3">BETTER RESPECT </span> */}
              </Typography>
            </div>
            <ButtonWrapper>
              <a href="#contact">
                <CustomBtn className="solid-btn">Sign up</CustomBtn>
              </a>
              <a href="#trial-info">
                <CustomBtn className="outline-btn">See Trial</CustomBtn>
              </a>
            </ButtonWrapper>
          </TextButtonWrapper>
          <ImageWrapper>
            <img src={home} alt="home" />
          </ImageWrapper>
        </div>
        {/* <ArrowWrapper>
          <DownArrow className="down-arrow" />
        </ArrowWrapper> */}
      </ImageTextWrapper>
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled.div`
  height: calc(100vh - 8rem);
  .color1 {
    color: #d32f2f;
  }
  .color2 {
    color: #5072a7;
  }
  .three-values-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .three-values {
    font-size: 0.5rem;
    font-weight: bolder;
  }
  @media screen and (min-width: 1024px) {
    padding-bottom: 4rem;
    .three-values {
      font-size: 1rem;
    }
  }
`;

const ImageTextWrapper = styled.div`
  /* background: linear-gradient(90deg, #ffebee 0%, #e8eaf6 100%); */
  /* background-color: #f5f5f5; */
  /* background-color: #5072a7; */
  height: calc(100% - 55px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .text-img-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TextButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  .home-v {
    color: #d32f2f;
    /* color: #5072a7; */
    font-size: 5rem;
    font-family: "Satisfy", cursive;
  }
  .home-t {
    color: #5072a7;
    /* color: #5072a7; */
    font-size: 5rem;
    font-family: "Satisfy", cursive;
  }
  .victory-tkd {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    letter-spacing: 0.2rem;
    font-family: "Montserrat", sans-serif;
  }
  .home-description-wrapper {
    margin-top: -4rem;
    margin-bottom: 2rem;
    width: 15rem;
    text-align: center;
  }
  @media screen and (min-width: 1024px) {
    align-items: flex-start;
    margin-left: 4rem;
    .home-v {
      font-size: 6rem;
    }
    .home-t {
      color: #5072a7;
      /* color: #5072a7; */
      font-size: 6rem;
    }
    .victory-tkd {
      font-size: 1.8rem;
    }
    .three-values {
      font-size: 0.8rem;
      margin-top: -5rem;
    }
    .home-description-wrapper {
      width: 20rem;
      text-align: justify;
    }
  }
  @media screen and (min-width: 1300px) {
    .home-v {
      font-size: 6rem;
    }
    .victory-tkd {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 3rem;
      letter-spacing: 0.2rem;
    }
  }
  @media screen and (min-width: 1600px) {
    .home-v {
      font-size: 7rem;
    }
    .victory-tkd {
      font-size: 4rem;
      font-weight: bold;
      margin-bottom: 3rem;
      letter-spacing: 0.2rem;
    }
  }
`;

const ImageWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    max-width: 45%;
    img {
      width: 100%;
      height: 40rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  .solid-btn {
    width: 10rem;
    height: 3.5rem;
    font-size: 0.7rem;
  }
  .outline-btn {
    width: 10rem;
    height: 3.5rem;
    font-size: 0.7rem;
  }
  @media screen and (min-width: 1440px) {
    .solid-btn {
      width: 11rem;
      font-size: 0.8rem;
    }
    .outline-btn {
      width: 11rem;
      font-size: 0.8rem;
    }
  }
`;

// const ArrowWrapper = styled.div`
//   // margin-top: 3rem;
// `;

export default LandingPage;
