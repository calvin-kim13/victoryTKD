import styled from "@emotion/styled";
import React from "react";
import "./styles/About.css";
import { motion } from "framer-motion";
import Button from "../components/Button";
import about from "../assets/about.svg";

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
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
            <a href="/contact">
              <Button className="solid-btn">CONTACT US</Button>
            </a>
          </AboutContent>
        </div>
      </div>
    </motion.div>
  );
};

const AboutHeader = styled.div``;

const AboutContent = styled.div`
  .solid-btn {
    margin-top: 2rem;
    height: 2rem;
    font-size: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .solid-btn span {
    top: -7.5px;
  }
  @media screen and (min-width: 1024px) {
    .solid-btn {
      height: 3rem;
      font-size: 0.8rem;
    }
    .solid-btn span {
      top: -8.5px;
    }
  }
`;

export default About;
