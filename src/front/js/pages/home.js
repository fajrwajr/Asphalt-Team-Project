import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import image1 from "../../img/bigstock.jpg";
import image2 from "../../img/asphalt2.jpg";
import image3 from "../../img/asphalt3.jpg";

export const Home = (props) => (
  <>
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
          <img src={image1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={image1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={image1} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="servicecards">
      <div className="container">
        <div className="row justify-content-center">
          <img src={image2} className="col-6" />
          <div className="text-warning col-4">
            <h1>Sealcoating</h1>
            <h3>Protect and beautify your asphalt parking lot.</h3>
            <button> Read more</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-warning col-4">
            <h1>Hot Pour Crack Filling</h1>
            <h3>Prevent water intrusion to the subbase.</h3>
            <button> Read more</button>
          </div>
          <img src={image2} className="col-6" />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <img src={image2} className="col-6" />
          <div className="text-warning col-4">
            <h1>Striping and Signage</h1>
            <h3>ensure patrons know where to park and comply with ADA.</h3>
            <button> Read more</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-warning col-4">
            <h1>Asphalt Paving and Repair</h1>
            <h3>Asphalt paving and patching.</h3>
            <button> Read more</button>
          </div>
          <img src={image2} className="col-6" />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="card-deck">
        <div className="coolestcard col-sm-4">
          <div className="card border-0 ">
            <img className="card-img-top" src={image1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="coolestcard col-sm-4">
          <div className="card border-0">
            <img className="card-img-top" src={image1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="coolestcard col-sm-4">
          <div className="card border-0">
            <img className="card-img-top" src={image1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
