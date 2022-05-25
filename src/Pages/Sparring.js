import styled from "@emotion/styled";
import React from "react";
import classesImg from "../assets/sparring.png";
import Button from "../components/Button";
import Zoom from "react-reveal/Zoom";
import { useNavigate } from "react-router-dom";
import "./styles/EachClasses.css";

const Sparring = () => {
  const navigate = useNavigate();
  return (
    <Zoom>
      <div className="classes-wrapper">
        <div className="classes-img">
          <img src={classesImg} alt="Classes" />
        </div>
        <div className="classes-text-wrapper">
          <AboutHeader>
            <div className="eachClasses-header">Sparring</div>
          </AboutHeader>

          <AboutContent className="classes-description-wrapper">
            <div className="classes-paragraph">
              Sparring Program is an extra class designed to teach students how
              to protect themselves through physical contact. They learn
              different strategies and techniques to improve their sparring
              skills, such as footwork and timing. <br />
              <br /> This class is an effective and practical way for students
              to develop confidence and self-defense skills.
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

export default Sparring;
