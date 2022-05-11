import React from "react";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import "./styles/Testimonial.css";
import { Typography } from "@mui/material";

const Testimonial = () => {
  return (
    <div className="wrapper">
      <Typography
        variant="overline"
        fontWeight="bold"
        margin="25px 0"
        textTransform="uppercase"
        className="testimony-header"
        fontSize="25px"
      >
        Testimonial
      </Typography>
      <Typography
        variant="overline"
        textAlign="center"
        marginBottom="30px"
        className="testimony-description"
        fontSize="13px"
        fontWeight="bold"
      >
        What our students say about us...
      </Typography>
      <div className="cards">
        <div className="card">
          <p>
            The best thing to ever happen to my son. Bring your kids to Victory
            Taekwondo. You will not be disappointed!
          </p>
          <h2>Veronica M.</h2>
          <h4>June 10, 2019</h4>
          <FormatQuoteRoundedIcon className="quote" fontSize="" />
        </div>
        <div className="card">
          <p>
            It's a great studio. At first, our son didn't want to join, but now
            he rushes to class. They have an awesome staff and the way they
            teach is unique!
          </p>
          <h2>Ana Gutierrez</h2>
          <h4>March 18, 2018</h4>
          <FormatQuoteRoundedIcon className="quote" fontSize="" />
        </div>
        <div className="card">
          <p>
            If you're looking to teach your kids discipline, respect, and
            self-defense while having fun, Victory Taekwondo is the best place
            to go!
          </p>
          <h2>JL Cotton</h2>
          <h4>September 21, 2017</h4>
          <FormatQuoteRoundedIcon className="quote" fontSize="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
