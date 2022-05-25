import styled from "@emotion/styled";
import React from "react";
import classesImg from "../assets/children.png";
import Button from "../components/Button";
import Zoom from "react-reveal/Zoom";
import { useNavigate } from "react-router-dom";
import "./styles/EachClasses.css";

const Children = () => {
  const navigate = useNavigate();
  return (
    <Zoom>
      <div className="classes-wrapper">
        <div className="classes-img">
          <img src={classesImg} alt="Classes" />
        </div>
        <div className="classes-text-wrapper">
          <AboutHeader>
            <div className="eachClasses-header">Children</div>
          </AboutHeader>

          <AboutContent className="classes-description-wrapper">
            <div className="classes-paragraph">
              Children's Class is for those ages 6-12 years old. This popular
              class helps students develop confidence, discipline, and respect.
              They also learn self-defense techniques to protect themselves from
              dangerous situations.
              <br />
              <br /> This class promotes physical and character development to
              help children grow into healthy and strong-minded individuals.
            </div>
            <BackButton>
              <Button className="classes-btn" onClick={() => navigate(-1)}>
                Back to Classes
              </Button>
            </BackButton>
          </AboutContent>
        </div>
      </div>
    </Zoom>
  );
};

const AboutHeader = styled.div``;
const AboutContent = styled.div``;

const BackButton = styled.div`
  .classes-btn {
    margin-top: 3rem;
    height: 2rem;
    font-size: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .classes-btn span {
    top: -10px;
  }
  @media screen and (min-width: 1024px) {
    .classes-btn {
      height: 3rem;
      width: 15rem;
      font-size: 0.8rem;
    }
    .classes-btn span {
      top: -11px;
    }
  }
`;

export default Children;
