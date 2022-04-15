import React from "react";
import { Typography, TextField, Button, Paper } from "@mui/material";
import styled from "@emotion/styled";
import Map from "./Map";

const Contact = () => {
  return (
    <div>
      <ContactContainer>
        <ContactHeader>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            textAlign="center"
            letterSpacing="0.2rem"
            fontWeight="bold"
          >
            Contact Us
          </Typography>
        </ContactHeader>
        <ContactContent>
          <form
            action="https://formsubmit.co/calvinkim1230@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New email woohoo" />
            {/* <input type="hidden" name="_next" value="https://localhost3000/thanks" /> */}
            <TextField
              type="text"
              name="name"
              label="NAME"
              className="input"
              required
            />
            <TextField
              type="email"
              name="email"
              label="EMAIL"
              className="input"
              required
            />
            <TextField
              type="phone"
              name="phone"
              label="PHONE"
              className="input"
              required
            />
            <TextField
              name="message"
              label="SEND A MESSAGE..."
              rows="7"
              multiline
              className="input"
              required
            />
            <Button type="submit" variant="contained">
              SEND
            </Button>
          </form>
          <Map />
        </ContactContent>
      </ContactContainer>
    </div>
  );
};

const ContactContainer = styled.div``;

const ContactHeader = styled.div`
  margin-top: 2rem;
`;

const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  form {
    display: flex;
    flex-direction: column;
    width: 30rem;
    margin-top: 2rem;
  }
  .input {
    margin-bottom: 0.7rem;
  }
`;

export default Contact;
