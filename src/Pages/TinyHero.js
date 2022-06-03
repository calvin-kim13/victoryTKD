import styled from "@emotion/styled";
import React from "react";
import classesImg from "../assets/tinyHero.png";
import Button from "../components/Button";
import "./styles/EachClasses.css";
import { Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const TinyHero = () => {
  const navigate = useNavigate();
  return (
    <Zoom>
      <div className="classes-wrapper">
        <div className="classes-img">
          <img src={classesImg} alt="Classes" />
        </div>
        <div className="classes-text-wrapper">
          <AboutHeader>
            <div className="eachClasses-header">Tiny Heroes</div>
          </AboutHeader>

          <AboutContent className="classes-description-wrapper">
            <div className="classes-paragraph">
              Tiny Heroes is a specialized program for 4-5 year olds. This
              popular class helps students develop focus, discipline, and
              respect. Students learn how to follow instructions, socialize with
              others, and pay attention. <br />
              <br /> Parents who enroll their kids see remarkable results and
              enjoy watching them improve physically and mentally. <br />
              <br /> Plus, the Tiny Heroes have a blast!
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

export default TinyHero;
