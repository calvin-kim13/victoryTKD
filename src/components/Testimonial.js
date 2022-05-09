import React from "react";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import "./styles/Testimonial.css";

const Testimonial = () => {
  return (
    <div className="wrapper">
      <h1>What they say...</h1>
      <h5>Check what they say about us...</h5>
      <div className="cards">
        <div className="card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eos tenetur, dolore adipisci illo modi aliquid nemo corrupti ea
            nobis at aut accusamus fugiat omnis molestias expedita eveniet
            voluptatum ullam.
          </p>
          <h2>sandra bullok</h2>
          <h4>march 10, 2020</h4>
          <FormatQuoteRoundedIcon className="quote" />
        </div>
        <div className="card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eos tenetur, dolore adipisci illo modi aliquid nemo corrupti ea
            nobis at aut accusamus fugiat omnis molestias expedita eveniet
            voluptatum ullam.
          </p>
          <h2>sandra bullok</h2>
          <h4>march 10, 2020</h4>
          <FormatQuoteRoundedIcon className="quote" />
        </div>
        <div className="card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eos tenetur, dolore adipisci illo modi aliquid nemo corrupti ea
            nobis at aut accusamus fugiat omnis molestias expedita eveniet
            voluptatum ullam.
          </p>
          <h2>sandra bullok</h2>
          <h4>march 10, 2020</h4>
          <FormatQuoteRoundedIcon className="quote" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
