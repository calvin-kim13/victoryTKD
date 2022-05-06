import React from "react";
import { Paper, Typography } from "@mui/material";
import "./styles/ExtraClasses.css";
import flyer1 from "../../assets/flyer1.png";
import flyer2 from "../../assets/flyer2.png";
import flyer3 from "../../assets/flyer3.png";
import flyer4 from "../../assets/flyer4.png";

const ExtraClasses = () => {
  return (
    <Paper elevation={12} className="extra-classes-wrapper">
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
        EXTRA CLASSES
      </Typography>
      <div elevation={12} className="extra-classes-text">
        <Typography variant="overline">
          We will start providing the following extra classes:
        </Typography>
        <ul>
          <li>
            <Typography variant="overline">Competition Team</Typography>
          </li>
          <li>
            <Typography variant="overline">Demo Team</Typography>
          </li>
          <li>
            <Typography variant="overline">Sparring Team</Typography>
          </li>
          <li>
            <Typography variant="overline">Weapons Team</Typography>
          </li>
        </ul>
        <Typography variant="overline">
          If you're interested in joining, you can sign up at the front desk!
        </Typography>
        <Typography
          marginTop="1rem"
          variant="overline"
          fontWeight="bold"
          sx={{ color: "red" }}
        >
          *The final date to register is December 17 (Fri). Register while you
          can!
        </Typography>
      </div>
      <div className="extra-classes-img-wrapper">
        <img
          className="extra-classes-img"
          src={flyer1}
          alt="promotional poster"
        />
        <img
          className="extra-classes-img"
          src={flyer2}
          alt="promotional poster"
        />
      </div>
      <div className="extra-classes-img-wrapper">
        <img
          className="extra-classes-img"
          src={flyer3}
          alt="promotional poster"
        />
        <img
          className="extra-classes-img"
          src={flyer4}
          alt="promotional poster"
        />
      </div>
    </Paper>
  );
};

export default ExtraClasses;
