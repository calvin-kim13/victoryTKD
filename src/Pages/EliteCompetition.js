import styled from "@emotion/styled";
import React from "react";
import classesImg from "../assets/elitecomp.png";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styles/EachClasses.css";

const EliteCompetition = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="classes-container"
    >
      <div className="classes-wrapper">
        <div className="classes-img">
          <img src={classesImg} alt="Classes" />
        </div>
        <div className="classes-text-wrapper">
          <AboutHeader>
            <div className="classes-header">Elite Competition</div>
          </AboutHeader>

          <AboutContent className="classes-description-wrapper">
            <div className="classes-paragraph">
              Elite Competition Program is an extra class designed to prepare
              students for sparring competitions. This exclusive class is taught
              by Grand Master Kim, a former National Sparring Champion in South
              Korea. <br />
              <br />
              Students learn advanced sparring skills and techniques, which
              further develop their self-defense. <br />
              <br /> Our students compete and win in State, Nationals, and World
              Tournaments. Those interested in becoming Taekwondo Olympic
              Champions are highly encouraged to join.
            </div>
            <BackButton>
              <Button className="classes-btn" onClick={() => navigate(-1)}>
                Back to Classes
              </Button>
            </BackButton>
          </AboutContent>
        </div>
      </div>
    </motion.div>
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
    top: -9px;
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

export default EliteCompetition;
