import React from "react";
import { Typography, TextField, Button, Paper } from "@mui/material";
import styled from "@emotion/styled";
import Map from "./Map";
import contact1 from "../assets/contact1.png";
import contact2 from "../assets/contact2.png";
import contact3 from "../assets/contact3.png";
import contact4 from "../assets/contact4.png";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div>
      <ContactContainer id="contact">
        <ContactHeader>
          <img src={contact1} alt="Student Image" className="studentone" />
          <img src={contact3} alt="Student Image" className="studenttwo" />
          <Typography
            variant="h2"
            gutterBottom
            component="div"
            textAlign="center"
            letterSpacing="0.2rem"
            fontWeight="bold"
            className="talk"
          >
            LET'S TALK
          </Typography>
          <img src={contact2} alt="Student Image" className="studentthree" />
          <img src={contact4} alt="Student Image" className="studentfour" />
        </ContactHeader>
        <ContactContent>
          <div className="info">
            <ContactInfo />
          </div>
          <div className="send-message">
            <Typography
              variant="h3"
              fontWeight="bold"
              marginBottom="1rem"
              marginLeft="2rem"
            >
              Ask us
            </Typography>
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
              <Button type="submit" variant="contained">
                SEND
              </Button>
            </form>
          </div>

          <div className="map">
            <Map />
          </div>
        </ContactContent>
      </ContactContainer>
    </div>
  );
};

const ContactContainer = styled.div`
  height: 100vh;
`;

const ContactHeader = styled.div`
  min-height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #181818;
  color: white;
  img {
    height: 25rem;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    .studenttwo {
      display: none;
    }
    .studentone {
      display: none;
    }
    .studentthree {
      display: none;
    }
    .studentfour {
      display: none;
    }
    .talk {
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr;
    .studenttwo {
      display: none;
    }
    .studentthree {
      display: none;
    }
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .map {
  }
  .info {
    padding: 1rem;
    background-color: #e8e8e8;
  }
  .send-message {
    padding: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 25rem;
    padding: 1rem;
  }
  .input {
    margin-bottom: 0.7rem;
  }
  .input label {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export default Contact;
