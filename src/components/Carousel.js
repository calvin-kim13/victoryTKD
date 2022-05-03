import React, { useState } from "react";
import { cards } from "./CardTestimony";
import { Card, Typography } from "@mui/material";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./styles/Carousel.css";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = cards.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(cards) || cards.length <= 0) {
    return null;
  }

  return (
    <section className="carousel">
      {cards.map((card, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <Card className="card" sx={{ height: "22rem", width: "20rem" }}>
                <div className="quote-testimony">
                  <Typography
                    variant="overline"
                    textAlign="center"
                    lineHeight="1.7rem"
                    padding="2rem 2rem 0 2rem"
                    marginBottom=".5rem"
                  >
                    {card.statement}
                  </Typography>
                  <div className="quote-wrapper">
                    <FormatQuoteRoundedIcon sx={{ fontSize: "3rem" }} />
                  </div>
                </div>
                <div className={card.id}>
                  <Typography
                    variant="overline"
                    fontSize="1.2rem"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    {card.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    textAlign="center"
                  >
                    {card.date}
                  </Typography>
                </div>
              </Card>
            )}
          </div>
        );
      })}
      <div className="arrows">
        <div className="left-arrow-container">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        </div>
        <div className="right-arrow-container">
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
