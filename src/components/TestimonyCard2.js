import React from "react";
import styled from "styled-components";
import "./styles/Testimonial.css";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const testimonies = [
  {
    description:
      "Been coming here a few months and my son likes it. He enjoys going and practicing his moves at home. It definitely has helped his balance. The instructors do a great job of keeping them engaged and challenging them.",
    name: "Chris M.",
    date: "May 19, 2022",
  },
  {
    description:
      "6 months at this studio and my Kid has learned so much Discipline, respect and has a great attitude about everyday life! The instructors are very good with kids of all ages! This studio definitely gets 5 STARS.",
    name: "Kristina D.",
    date: "April 19, 2021",
  },
  {
    description:
      "Victory Tae Kwon do has been so awesome for my son! It has helped so much with discipline. Def would recommend!",
    name: "Kathy C.",
    date: "April 20, 2021",
  },
];

const TestimonyCard2 = () => {
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

export default TestimonyCard2;
