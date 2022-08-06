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
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
          <img src={image1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src={image1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src={image1} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div className="allservicecards text-warning">
      <div className="servicecardsleft ">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="border-0">
              <div className="row card-body">
                <div className="col-sm-6">
                  <h5 className="card-title">Sealcoating</h5>
                  <p className="card-text">Protect your asphalt parking lot.</p>
                  <a href="#" className="btn btn-primary">
                    {/* THIS WILL BE A BUTTON TO ANOTHER PAGE READ MORE */}
                    Read More
                  </a>
                </div>
                <img className="col-sm-6" src={image1} alt="sans" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="servicecardsright mx-auto">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="card border-0">
              <div className="row card-body">
                <img className="col-sm-6" src={image1} alt="sans" />
                <div className="col-sm-6">
                  <h5 className="card-title">Asphalt pavement and repair</h5>
                  <p className="card-text">Asphalt paving and patching.</p>
                  <a href="#" className="btn btn-primary">
                    {/* THIS WILL BE A BUTTON TO ANOTHER PAGE READ MORE */}
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="servicecardsleft">
        <div className="row justify-content-center bg-transparent">
          <div className="col-sm-6">
            <div className="card border-0">
              <div className="row card-body">
                <div className="col-sm-6">
                  <h5 className="card-title">Striping and Signage</h5>
                  <p className="card-text">
                    Ensure patrons know where to park and comply with ADA
                    (American Disabilities Act)
                  </p>
                  {/* THIS WILL BE A BUTTON TO ANOTHER PAGE READ MORE */}
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
                <img className="col-sm-6" src={image1} alt="sans" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="servicecardsright">
        <div className="row  justify-content-center bg-transparent">
          <div className="col-sm-6">
            <div className="card border-0">
              <div className="row card-body">
                <img
                  className="col-sm-6"
                  src="https://picsum.photos/1000/1000?random=15"
                  alt="sans"
                />
                <div className="col-sm-6">
                  <h5 className="card-title">Service Name</h5>
                  <p className="card-text">
                    Service description for awesome service traffic
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="servicecardsleft">
        <div className="row justify-content-center bg-transparent">
          <div className="col-sm-6">
            <div className="card border-0">
              <div className="row card-body">
                <div className="col-sm-6">
                  <h5 className="card-title">Service Name</h5>
                  <p className="card-text">
                    Service description for awesome service traffic
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
                <img
                  className="col-sm-6"
                  src="https://picsum.photos/1000/1000?random=16"
                  alt="sans"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="card-deck">
        <div className="coolestcard col-sm-4">
          <div className="card border-0 ">
            <img
              className="card-img-top"
              src="https://picsum.photos/1000/1000?random=4"
              alt="Card image cap"
            />
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
            <img
              className="card-img-top"
              src="https://picsum.photos/1000/1000?random=5"
              alt="Card image cap"
            />
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
            <img
              className="card-img-top"
              src="https://picsum.photos/1000/1000?random=6"
              alt="Card image cap"
            />
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
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://code.jquery.com/jquery-3.2.1.js"
      integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
      crossOrigin="anonymous"
    ></script>

    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
      integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossOrigin="anonymous"
    ></script>
    <script src="routes.js"></script>
  </>
);
