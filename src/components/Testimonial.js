import React from "react";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import "./styles/Testimonial.css";
import { Typography } from "@mui/material";
import { Rate } from "antd";
import yelp from "../assets/yelp.png";
import Button from "../components/Button";

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
      <div className="yelp-card">
        <h3>
          <img src={yelp} alt="social link"></img>Yelp Rating:{" "}
          <span className="rating"> 4.5</span>
        </h3>
        <div className="yelp-review-wrapper">
          <Rate disabled defaultValue={4.5} allowHalf={true} />
        </div>
        <p>(76 reviews)</p>
        <a
          href="https://www.yelp.com/writeareview/biz/GSumnpL1TcBCtjB9vHZI8w?return_url=%2Fbiz%2FGSumnpL1TcBCtjB9vHZI8w&review_origin=biz-details-war-button"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="solid-btn review-btn">Add Review</Button>
        </a>
      </div>
      <div className="cards">
        <div className="card">
          <div className="p">
            The best thing to ever happen to my son. Bring your kids to Victory
            Taekwondo. You will not be disappointed!
          </div>
          <div className="h2">Veronica M.</div>
          <div className="h4">June 10, 2019</div>
          <FormatQuoteRoundedIcon className="quote" fontSize="" />
        </div>
        <div className="card">
          <div className="p">
            It's a great studio. At first, our son didn't want to join, but now
            he rushes to class. They have an awesome staff and the way they
            teach is unique!
          </div>
          <div className="h2">Ana Gutierrez</div>
          <div className="h4">March 18, 2018</div>
          <FormatQuoteRoundedIcon className="quote" fontSize="" />
        </div>
        <div className="card">
          <div className="p">
            If you're looking to teach your kids discipline, respect, and
            self-defense while having fun, Victory Taekwondo is the best place
            to go!
          </div>
          <div className="h2">JL Cotton</div>
          <div className="h4">September 21, 2017</div>
          <FormatQuoteRoundedIcon className="quote" fontSize="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
