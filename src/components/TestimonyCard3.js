import React from "react";
import styled from "styled-components";
import "./styles/Testimonial.css";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const testimonies = [
  {
    description:
      "This is my sons first time in Taekwondo and he loves it! The staff here is amazing, they teach the kids something new every week. They are also very patient with the little ones and that's a big plus!",
    name: "Alexis M.",
    date: "April 6, 2021",
  },
  {
    description:
      "My son absolutely loves going to class at Victory Taekwondo. We started going just a few weeks ago and I was happy with the safety measures they take due to COVID. I know he will thrive here.",
    name: "Carolyn E.",
    date: "March 23, 2021",
  },
  {
    description:
      "Finally found something my son loves. He will be belting up next week. So grateful for finding a place with great staff, awesome instructors. Highly recommend to anyone looking for Taekwondo this is the spot",
    name: "Katie M.",
    date: "December 9, 2020",
  },
];

const TestimonyCard3 = () => {
  return (
    <CardWrapper className="card-wrapper">
      {testimonies.map((testimony) => (
        <div className="card" key={testimony.description}>
          <div className="p">{testimony.description}</div>
          <div className="h2">{testimony.name}</div>
          <div className="h4">{testimony.date}</div>
          <FormatQuoteRoundedIcon className="quote" fontSize="" />
        </div>
      ))}
    </CardWrapper>
  );
};

const CardWrapper = styled.div``;

export default TestimonyCard3;
