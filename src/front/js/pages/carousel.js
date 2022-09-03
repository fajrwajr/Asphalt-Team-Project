import React from "react";
import "../../styles/home.css";
import image1 from "../../img/asphalt2.jpg";
import image2 from "../../img/asphalt2.jpg";
import image3 from "../../img/asphalt3.jpg";

export const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            style="width: 100%; height: 100%"
            className="imgOne d-block w-100 h-100"
            src={image1}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            style="max-width: 100%"
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            style="max-width: 100%"
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
