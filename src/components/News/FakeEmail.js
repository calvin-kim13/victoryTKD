import { Paper, Typography } from "@mui/material";
import React from "react";
import "./styles/FakeEmail.css";

const FakeEmail = () => {
  return (
    <Paper elevation={12} className="fake-email-wrapper">
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
        marginTop="2rem"
        borderBottom="2px solid black"
        paddingBottom="2rem"
      >
        FAKE EMAIL ACCOUNT
      </Typography>
      <div className="fake-email-text-wrapper">
        <Typography className="fake-email-text">
          Dear Victory, <br /> <br />
          One of our parents contacted us saying that he/she received an email
          from "GMK1328@gmail.com," which contained inappropriate content.
          Needless to say, that email does not belong to Victory Taekwondo or
          Grand Master Kim. <br /> <br />
          We have reported this email account to Google and they will conduct a
          thorough investigation. If you receive an email from that account or
          other accounts that seem related to our studio, please let us know.
          The only email associated with Victory is: <br />
          <br />
          victorytkdcenter@gmail.com
          <br />
          <br /> Thank you.
        </Typography>
      </div>
    </Paper>
  );
};

export default FakeEmail;
