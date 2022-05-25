import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import Map from "../components/Map";
import ContactInfo from "../components/ContactInfo";
import Fade from "react-reveal/Fade";
import Form from "../components/Form";

const Contact = () => {
  return (
    <Fade right>
      <ContactContainer id="contact">
        <ContactHeader>
          <div className="talk">CONTACT US</div>
        </ContactHeader>
        <ContactContent>
          {/* <ContactInfo /> */}
          <div className="send-message">
            <Typography
              variant="h6"
              fontWeight="bold"
              marginTop="3rem"
              marginBottom="1rem"
              textAlign="center"
              textTransform="uppercase"
            >
              Sign up for our trial!{" "}
            </Typography>
            <Form />
          </div>
          <ContactInfo />
          <div className="map">
            <Map />
          </div>
        </ContactContent>
      </ContactContainer>
    </Fade>
  );
};

const ContactContainer = styled.div`
  height: fit-content;
  font-family: "Montserrat", sans-serif;
  .talk {
    text-align: center;
    letter-spacing: 0.2rem;
    font-weight: bold;
    padding: 2rem;
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1001px) {
    .talk {
      font-size: 40px;
    }
  }
`;

const ContactHeader = styled.div`
  height: 18vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #252831;
  color: white;
  @media screen and (max-width: 1200px) {
    height: 10rem;
    grid-template-columns: 1fr;
  }
`;

const ContactContent = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: 1fr;
  .send-message {
    padding: 1rem;
    background-color: #fff;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    width: fit-content;
  }
  .input {
    margin-bottom: 0.7rem;
    border: 1px solid grey;
    padding: 0.5rem;
    font-size: 0.8rem;
    border-radius: 5px;
  }
  .contact-btn {
    height: 55px;
    width: 19rem;
    margin: 0 auto;
    font-size: 0.8rem;
    background: #5072a7;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.4s;
    border-radius: 5px;
  }
  .contact-btn:hover {
    background-color: #002d62;
  }
  .contact-btn:active {
    transform: scale(1.03);
  }
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    form {
      width: 70%;
    }
    .contact-btn {
      width: 100%;
    }
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default Contact;
