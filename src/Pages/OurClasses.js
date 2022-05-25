import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";
import React from "react";
import tinyHero from "../assets/tinyHero.png";
import children from "../assets/children.png";
import teenAdult from "../assets/teenAdult.png";
import weapons from "../assets/weapons.png";
import sparring from "../assets/sparring.png";
import elitecomp from "../assets/elitecomp.png";
import { Link } from "react-router-dom";
// import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "./styles/Class.css";

const OurClasses = () => {
  return (
    <Fade right>
      <Paper elevation={8} style={{ backgroundColor: "#f5f5f5" }}>
        <div className="classes-header">CLASSES</div>
      </Paper>
      <ClassesContent>
        <Link to="/tiny-heroes">
          <div className="paper-container">
            <img src={tinyHero} alt="tinyhero" />
            <Typography className="title" variant="overline" fontSize="20px">
              Tiny heroes <span />
            </Typography>
          </div>
        </Link>
        <Link to="/children">
          <div className="paper-container">
            <img src={children} alt="children" />
            <Typography className="title" variant="overline" fontSize="20px">
              children
            </Typography>
          </div>
        </Link>
        <Link to="/teen-adult">
          <div className="paper-container">
            <img src={teenAdult} alt="teenAdult" />
            <Typography className="title" variant="overline" fontSize="20px">
              teen & adult{" "}
            </Typography>
          </div>
        </Link>
        <Link to="/weapons">
          <div className="paper-container">
            <img src={weapons} alt="weapons" />
            <Typography className="title" variant="overline" fontSize="20px">
              weapons{" "}
            </Typography>
          </div>
        </Link>
        <Link to="/sparring">
          <div className="paper-container">
            <img src={sparring} alt="sparring" />
            <Typography className="title" variant="overline" fontSize="20px">
              sparring{" "}
            </Typography>
          </div>
        </Link>
        <Link to="/elite-competition">
          <div className="paper-container">
            <img src={elitecomp} alt="elitecomp" />
            <Typography className="title" variant="overline" fontSize="20px">
              elite competition{" "}
            </Typography>
          </div>
        </Link>
      </ClassesContent>
    </Fade>
  );
};

const ClassesContent = styled.div`
  /* padding: 2rem; */
  margin: 2rem 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .paper-container {
    width: 20rem;
    height: 20rem;
    margin: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.9;
    background: rgba(0, 0, 0, 0.8);
  }
  .paper-container:hover {
    opacity: 1;
    transition: 0.3s;
    cursor: pointer;
    .title {
      border-radius: 4px;
      border: 2px solid white;
      color: #ffffff;
      transition: 0.4s;
      cursor: pointer;
      margin: 5px;
    }
    img {
      opacity: 0.6;
    }
  }
  img {
    width: 300px;
    height: 300px;
    opacity: 0.4;
  }
  .title {
    border-bottom: 1px solid white;
    padding: 0.2rem;
    color: white;
    position: absolute;
    font-weight: bold;
    width: 17rem;
    text-align: center;
  }
  @media screen and (min-width: 1024px) {
    .paper-container {
      width: 18rem;
      height: 19rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .paper-container {
      width: 22rem;
      height: 20rem;
    }
  }
  @media screen and (min-width: 1447px) {
    .paper-container {
      width: 22rem;
      height: 21rem;
    }
  }
  @media screen and (min-width: 1520px) {
    .paper-container {
      width: 25rem;
      height: 22rem;
    }
  }
  @media screen and (min-width: 1600px) {
    .paper-container {
      width: 29rem;
    }
  }
`;

export default OurClasses;
