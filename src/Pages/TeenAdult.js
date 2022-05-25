import styled from "@emotion/styled";
import React from "react";
import classesImg from "../assets/teenAdult.png";
import Button from "../components/Button";
import Zoom from "react-reveal/Zoom";
import { useNavigate } from "react-router-dom";
import "./styles/EachClasses.css";

const TeenAdult = () => {
  const navigate = useNavigate();
  return (
    <Zoom>
      <div className="classes-wrapper">
        <div className="classes-img">
          <img src={classesImg} alt="Classes" />
        </div>
        <div className="classes-text-wrapper">
          <AboutHeader>
            <div className="eachClasses-header">Teen & Adult</div>
          </AboutHeader>

          <AboutContent className="classes-description-wrapper">
            <div className="classes-paragraph">
              Teens & Adults Class is for those ages 13 and up. This exclusive
              program promotes weight loss, physical fitness, flexibility, and
              self-defense. <br />
              <br /> Through challenging, yet fun and energizing workouts,
              students are able to maintain a healthy weight. Furthermore, they
              learn practical self-defense techniques to protect themselves from
              dangerous situations.
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
      top: -11.5px;
    }
  }
`;

export default TeenAdult;
