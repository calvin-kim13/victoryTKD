import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomBtn from "./Button";

const Trial = () => {
  return (
    <TrialPage id="trial-info">
      <TrialContainer>
        <TrialOffer>
          <Typography variant="h4" fontWeight="bold" marginBottom="1rem">
            EXCLUSIVE OFFER
          </Typography>
          <Typography variant="h6" marginBottom="2rem">
            4 week trial that allows you to experience what it's like to be a
            student at Victory Taekwondo for{" "}
            <span className="trial-price">ONLY $39</span>!
          </Typography>
          <a href="/classes">
            <CustomBtn className="solid-btn view-btn">VIEW CLASSES</CustomBtn>
          </a>
        </TrialOffer>
        <TrialIncludes>
          <ul>
            <li>
              01. <span className="trial-list">8 Classes</span>
            </li>
            <li>
              02. <span className="trial-list">Private Assessment</span>
            </li>
            <li>
              03. <span className="trial-list">Lorem ipsum</span>
            </li>
            <li>
              04. <span className="trial-list">Lorem ipsum</span>
            </li>
            <li>
              04. <span className="trial-list">Lorem ipsum</span>
            </li>
          </ul>
        </TrialIncludes>
      </TrialContainer>
      <ArrowWrapper>
        <KeyboardArrowDownIcon fontSize="large" className="down-arrow" />
      </ArrowWrapper>
    </TrialPage>
  );
};

const TrialPage = styled.div`
  height: 90vh;
  padding: 5rem 0;
  .down-arrow {
    animation: animateDown infinite 1.5s;
  }
  display: flex;
  align-items: space-evenly;
  justify-content: space-evenly;
  flex-direction: column;
  @media screen and (min-width: 1000px) {
    padding: 0;
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
    font-weight: bold;
  }
  @media screen and (max-width: 1000px) {
    text-align: center;
    .view-btn {
      width: 250px;
      height: 60px;
    }
  }
`;

const TrialIncludes = styled.div`
  ul li {
    list-style: none;
    line-height: 6rem;
  }
  .trial-list {
    font-size: 3rem;
    margin-left: 1rem;
  }
  @media screen and (max-width: 1000px) {
    ul li {
      line-height: 5rem;
    }
    .trial-list {
      font-size: 1.7rem;
    }
  }
`;

const ArrowWrapper = styled.div`
  text-align: center;
  // margin-top: 2rem;
`;

export default Trial;
