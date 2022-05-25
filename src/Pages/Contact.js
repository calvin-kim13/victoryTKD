import React from "react";
import { Typography, TextField } from "@mui/material";
import styled from "@emotion/styled";
import Map from "../components/Map";
import ContactInfo from "../components/ContactInfo";
import CustomBtn from "../components/Button";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <Fade right>
      <ContactContainer id="contact">
        <ContactHeader>
          <div className="talk">CONTACT US</div>
        </ContactHeader>
        <ContactContent>
          <ContactInfo />
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
            <form
              action="https://formsubmit.co/victorytkdcenter@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Website form" />
              {/* <input type="hidden" name="_next" value="https://localhost3000/thanks" /> */}
              <TextField
                type="text"
                name="name"
                label="NAME"
                className="input "
                size="small"
                inputProps={{ style: { fontSize: 13 } }}
                required
              />
              <TextField
                type="email"
                name="email"
                label="EMAIL"
                className="input"
                size="small"
                inputProps={{ style: { fontSize: 13 } }}
                required
              />
              <TextField
                type="phone"
                name="phone"
                label="PHONE"
                className="input"
                size="small"
                inputProps={{ style: { fontSize: 13 } }}
                required
              />
              <TextField
                name="message"
                label="MESSAGE"
                rows="7"
                multiline
                className="input"
                inputProps={{ style: { fontSize: 13 } }}
                required
              />
              <CustomBtn type="submit" className="contact-btn">
                SEND
              </CustomBtn>
            </form>
          </div>
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
  }
  .input label {
    font-size: 0.7rem;
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
    transform: scale(1.01);
    transition: transform 200ms;
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
