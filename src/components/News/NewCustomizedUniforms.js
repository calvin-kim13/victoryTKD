import React from "react";
import "./styles/NewCustomizedUniforms.css";
import { Paper, Typography } from "@mui/material";
import back from "../../assets/back.png";
import front from "../../assets/front.png";
import pants from "../../assets/pants.png";

const NewCustomizedUniforms = () => {
  return (
    <Paper elevation={12} className="new-uniform-wrapper">
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
        marginTop="2rem"
        borderBottom="2px solid black"
        paddingBottom="2rem"
      >
        NEW CUSTOMIZED UNIFORMS
      </Typography>
      <div className="new-uniform-text">
        <Typography variant="overline">
          We now have customized uniforms available in four different colors:
          red, blue, black, and white. We attached a sample of our red
          customized uniform here. Come to the front desk for more info!
        </Typography>
      </div>
      <div className="new-uniform-top-wrapper">
        <img className="new-uniform-img" src={back} alt="uniform back" />
        <img className="new-uniform-img" src={front} alt="uniform front" />
      </div>
      <div className="new-uniform-pants-wrapper">
        <img className="new-uniform-pants" src={pants} alt="uniform pants" />
      </div>
    </Paper>
  );
};

export default NewCustomizedUniforms;
