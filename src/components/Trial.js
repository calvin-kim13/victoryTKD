import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import CustomBtn from "./Button";

const Trial = () => {
  return (
    <TrialPage id="trial-info">
      {/* <img className="trial-background" src={image} alt="" /> */}
      <TrialContainer>
        <TrialOffer>
          <div className="offer-wrapper">
            <Typography
              className="offer"
              variant="h4"
              fontWeight="800"
              marginBottom="1rem"
              fontFamily="Montserrat"
              // color="#5072a7"
            >
              EXCLUSIVE OFFER!
            </Typography>
          </div>
          <Typography
            className="offer-description"
            variant="h6"
            marginBottom="2rem"
            fontFamily="Montserrat"
          >
            4 week trial that allows you to experience what it's like to be a
            student at Victory Taekwondo for{" "}
            <span className="trial-price">ONLY $39</span>!
          </Typography>
          <a href="#contact">
            <CustomBtn className="outline-btn view-btn">Sign up</CustomBtn>
          </a>
        </TrialOffer>
        <TrialIncludes>
          <ul>
            <li>
              01. <span className="trial-list">Only $39</span>
            </li>
            <li>
              02. <span className="trial-list">4 Weeks</span>
            </li>
            <li>
              03. <span className="trial-list">8 Classes</span>
            </li>
            <li>
              04. <span className="trial-list">Private Assessment</span>
            </li>
          </ul>
        </TrialIncludes>
      </TrialContainer>
    </TrialPage>
  );
};

const TrialPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: space-evenly;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: #f5f5f5;
  font-family: "Montserrat", sans-serif;

  @media screen and (min-width: 1000px) {
    height: 90vh;
  }
`;

const TrialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const TrialOffer = styled.div`
  width: 21rem;
  .trial-price {
    text-decoration: underline;
    font-size: 1.4rem;
    font-weight: 800;
    color: #5072a7;
  }
  @media screen and (max-width: 1000px) {
    text-align: center;
    .offer {
      font-size: 1.5rem;
    }
    .offer-description {
      font-size: 1.1rem;
    }
    .view-btn {
      width: 220px;
      height: 55px;
      font-size: 0.8rem;
    }
  }
`;

const TrialIncludes = styled.div`
  ul li {
    list-style: none;
    line-height: 6rem;
  }
  .trial-list {
    font-size: 2.5rem;
    margin-left: 1rem;
  }
  @media screen and (max-width: 1000px) {
    ul li {
      line-height: 5rem;
    }
    .trial-list {
      font-size: 1.5rem;
    }
  }
`;

export default Trial;
