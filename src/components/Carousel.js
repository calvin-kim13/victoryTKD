import { Carousel } from "antd";
import TestimonyCard from "./TestimonyCard";
import TestimonyCard2 from "./TestimonyCard2";
import TestimonyCard3 from "./TestimonyCard3";
import "./styles/Carousel.css";

export const CarouselTestimony = () => (
  <div className="carousel-container">
    <div className="carousel-header">
      <h2>What our students say about us</h2>
    </div>
    <Carousel autoplay dotPosition="left">
      <div className="carousel-items">
        <TestimonyCard2 />
      </div>
      <div className="carousel-items">
        <TestimonyCard3 />
      </div>
      <div className="carousel-items">
        <TestimonyCard />
      </div>
    </Carousel>
  </div>
);
