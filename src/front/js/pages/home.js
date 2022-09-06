import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import image1 from "../../img/cracksealing.jpeg";
import image2 from "../../img/pavingroad.jpg";
import image3 from "../../img/road.jpg";
import image4 from "../../img/striping.jpg";
import image6 from "../../img/walmartparkinglot.jpg";
import image7 from "../../img/striping2.jpg";
import image8 from "../../img/cracksealing3.jpg";
import image9 from "../../img/pavingroad2.jpg";

export const Home = (props) => (
  <>
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
          <h1 className="commercial text-warning">Commercial Maintenance</h1>
          <img src={image3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <h1 className="carouseltext text-warning">Crack Seal</h1>
          <img src={image1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <h1 className="carouseltext text-warning">Striping and Signage</h1>
          <img src={image4} className="d-block w-100" alt="..." />
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
      <div className="container ">
        <div className="row justify-content-center topcard">
          <img src={image9} className="imagecard col-6" />
          <div className="text-warning col-4">
            <h1>Sealcoating</h1>
            <br></br>
            <h3>Protect and beautify your asphalt parking lot.</h3>
            <Link to="/sealcoating" type="button" className="btn btn-warning">
              Service
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-warning col-4">
            <h1>Hot Pour Crack Filling</h1>
            <br></br>
            <h3>Prevent water intrusion to the subbase.</h3>
            <Link to="/crackfilling" type="button" className="btn btn-warning">
              Service
            </Link>{" "}
          </div>
          <img src={image8} className="imagecard col-6" />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <img src={image4} className="imagecard col-6" />
          <div className="text-warning col-4">
            <h1>Striping and Signage</h1>
            <br></br>
            <h3>Ensure patrons know where to park and comply with ADA.</h3>
            <Link
              to="stripingandsignage"
              type="button"
              className="btn btn-warning"
            >
              Service
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row justify-content-center lastcard">
          <div className="text-warning col-4">
            <h1>Asphalt Paving and Repair</h1>
            <br></br>
            <h3>Asphalt paving and patching.</h3>
            <Link to="/paving" type="button" className="btn btn-warning">
              Service
            </Link>{" "}
          </div>
          <img src={image2} className="imagecard col-6" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="card-deck">
        <div className="coolestcard col-sm-4">
          <div className="card border-0 ">
            <img className="card-img-top" src={image6} alt="Card image cap" />
          </div>
        </div>
        <div className="coolestcard col-sm-4">
          <div className="card border-0">
            <img className="card-img-top" src={image7} alt="Card image cap" />
          </div>
        </div>
        <div className="coolestcard col-sm-4">
          <div className="card border-0">
            <img className="card-img-top" src={image1} alt="Card image cap" />
          </div>
        </div>
      </div>
    </div>
  </>
);
