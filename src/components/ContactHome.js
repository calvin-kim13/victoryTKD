import React from "react";
import { Typography, TextField } from "@mui/material";
import styled from "@emotion/styled";
import Map from "../components/Map";
import ContactInfo from "../components/ContactInfo";
import CustomBtn from "../components/Button";
import { motion } from "framer-motion";

const ContactHome = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      id="contact"
    >
      <ContactContainer id="contact">
        <ContactHeader>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            textAlign="center"
            letterSpacing="0.2rem"
            fontWeight="bold"
            className="talk"
          >
            CONTACT US
          </Typography>
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
              Send an Email directly
            </Typography>
            <form
              action="https://formsubmit.co/calvinkim1230@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="Taekwondo website form"
              />
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
                label="SEND A MESSAGE..."
                rows="7"
                multiline
                className="input"
                inputProps={{ style: { fontSize: 13 } }}
                required
              />
              <CustomBtn type="submit" className="outline-btn contact-btn">
                SEND
              </CustomBtn>
            </form>
          </div>
          <div className="map">
            <Map />
          </div>
        </ContactContent>
      </ContactContainer>
    </motion.div>
  );
};

const ContactContainer = styled.div`
  height: fit-content;
`;

const ContactHeader = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #181818;
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
    background: #5c6bc0;
    color: #fff;
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

export default ContactHome;
