import React from "react";
import "../styles/WelcomeSection.css";
import Carousel from "react-bootstrap/Carousel";

function WelcomeSection() {
  return (
    <Carousel indicators={false} controls={true}>
      <Carousel.Item>
        <div className="carousel-img-garden">
          <div className="shadowEffect-garden">
            <h1>Wir lassen den Garten Ihrer Träume wahr werden</h1>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-img-transport">
          <div className="shadowEffect-transport">
            <h1>Wir bieten zuverlässige Lieferdienste</h1>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-img-garbage"></div>
      </Carousel.Item>
    </Carousel>
  );
}

export default WelcomeSection;
