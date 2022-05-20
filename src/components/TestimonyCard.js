import React from "react";
import styled from "styled-components";
import "./styles/Testimonial.css";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const testimonies = [
  {
    description:
      "The best thing to ever happen to my son. Bring your kids to Victory Taekwondo. You will not be disappointed!",
    name: "Veronica M.",
    date: "June 10, 2019",
  },
  {
    description:
      "It's a great studio. At first, our son didn't want to join, but now he rushes to class. They have an awesome staff and the way they teach is unique!",
    name: "Ana Gutierrez",
    date: "March 18, 2018",
  },
  {
    description:
      "If you're looking to teach your kids discipline, respect, and self-defense while having fun, Victory Taekwondo is the best place to go!",
    name: "JL Cotton",
    date: "September 21, 2017",
  },
];

const TestimonyCard = () => {
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

export default TestimonyCard;
