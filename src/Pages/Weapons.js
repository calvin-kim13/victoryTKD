import styled from "@emotion/styled";
import React from "react";
import classesImg from "../assets/weapons.png";
import Button from "../components/Button";
import { Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import "./styles/EachClasses.css";

const Weapons = () => {
  const navigate = useNavigate();
  return (
    <Zoom>
      <div className="classes-wrapper">
        <div className="classes-img">
          <img src={classesImg} alt="Classes" />
        </div>
        <div className="classes-text-wrapper">
          <AboutHeader>
            <div className="eachClasses-header">Weapons</div>
          </AboutHeader>

          <AboutContent className="classes-description-wrapper">
            <div className="classes-paragraph">
              Weapons Program is an extra class where students learn how to
              properly and safely use various weapons: Nunchucks, Long Staff,
              Short Staff, and Cane. <br />
              <br /> Students also take a Weapon's Test to level up their skills
              and techniques.
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

export default Weapons;
