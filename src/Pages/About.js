import styled from "@emotion/styled";
import React from "react";
import "./styles/About.css";
import Button from "../components/Button";
import about from "../assets/contact4.png";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <Fade right>
      <div className="about-wrapper">
        <div className="about-img">
          <img src={about} alt="about" />
        </div>
        <div className="about-text-wrapper">
          <AboutHeader>
            <div className="aboutHeader">About Us</div>
          </AboutHeader>

          <AboutContent className="paragraph-wrapper">
            <div className="paragraph">
              Taekwondo is a Korean martial art that strengthens the mind and
              body through disciplined training. Tae ("foot"), Kwon ("fist"),
              and Do ("way") translates to "the way of the foot and fist."{" "}
              <br /> <br />
              At Victory Taekwondo, we are committed to helping you develop a
              better attitude, discipline, and respect. Whether you are a kid,
              teen, or adult, it is important to have a positive “YES, I CAN”
              attitude because it stimulates self-confidence and personal
              growth. <br /> <br />
              We hope to inspire you to achieve your dreams and become future
              leaders not just in Taekwondo, but also in life.
            </div>
            <Link to="/contact">
              <Button className="solid-btn">CONTACT US</Button>
            </Link>
          </AboutContent>
        </div>
      </div>
    </Fade>
  );
};

const AboutHeader = styled.div``;

const AboutContent = styled.div`
  .solid-btn {
    margin-top: 3rem;
    height: 2rem;
    font-size: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .solid-btn span {
    top: -10px;
  }
  @media screen and (min-width: 1024px) {
    .solid-btn {
      height: 3rem;
      width: 15rem;
      font-size: 0.8rem;
    }
    .solid-btn span {
      top: -11px;
    }
  }
`;

export default About;
