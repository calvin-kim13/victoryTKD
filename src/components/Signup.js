import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";

const Signup = () => {
  return (
    <TrialContainer id="signup">
      <TrialHeader>
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          textAlign="center"
          letterSpacing="0.4rem"
          fontWeight="bold"
        >
          Sign Up
        </Typography>
      </TrialHeader>
      <TrialContent>
        <Paper elevation={3} className="more-info">
          <Typography variant="subtitle2">
            *Once you register, we'll reach out to you to schedule a starting
            date!
          </Typography>
        </Paper>
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
        {/* <Paper elevation={3} className="more-info">
          <Typography variant="subtitle2">
            *Once you register, we'll reach out to you to schedule a starting
            date!
          </Typography>
        </Paper> */}
      </TrialContent>
    </TrialContainer>
  );
};

const TrialContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TrialHeader = styled.div``;
const TrialContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .trial-price {
    text-decoration: underline;
  }
  .trial-info {
    width: 20rem;
    padding: 1rem;
    margin: 0 auto;
  }
  .more-info {
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    border: 1px solid #1976d2;
    color: #1976d2;
    // width: 14rem;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 30rem;
    margin-top: 2rem;
    padding: 1rem;
  }
  .input {
    margin-bottom: 0.7rem;
  }
`;

export default Signup;
