import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import image1 from "../../img/asphalt2.jpg";
import image2 from "../../img/asphalt2.jpg";
import image3 from "../../img/asphalt3.jpg";

export const Home = (props) => (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="styles.css" />
    <link
      rel="stylesheet"
      href={image1}
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossOrigin="anonymous"
    />

    <link
      rel="stylesheet"
      href={image2}
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href={image2}
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="shortcut icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NashvilleAsphalt</title>
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
            className="d-block w-100"
            src="https://placeimg.com/1080/500/animals"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>My Caption Title (1st Image)</h5>
            <p>
              The whole caption will only show up if the screen is at least
              medium size.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://placeimg.com/1080/500/arch"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://placeimg.com/1080/500/nature"
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

    <div className="allservicecards">
      <div className="servicecardsleft">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="card border-0">
              <div className="row card-body">
                <div className="col-sm-6">
                  <h5 className="card-title">Sealcoating</h5>
                  <p className="card-text">Protect your asphalt parking lot.</p>
                  <a href="#" className="btn btn-primary">
                    {/* THIS WILL BE A BUTTON TO ANOTHER PAGE READ MORE */}
                    Read More
                  </a>
                </div>
                <img
                  className="col-sm-6"
                  src="https://picsum.photos/1000/1000?random=12"
                  alt="sans"
                />
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
                <img
                  className="col-sm-6"
                  src="https://picsum.photos/1000/1000?random=13"
                  alt="sans"
                />
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
        <div className="row justify-content-center">
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
                <img
                  className="col-sm-6"
                  src="https://picsum.photos/1000/1000?random=14"
                  alt="sans"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="servicecardsright">
        <div className="row  justify-content-center">
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
        <div className="row justify-content-center">
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

    <div className="card-deck">
      <div className="card border-0">
        <img
          className="card-img-top"
          src="https://picsum.photos/1000/1000?random=4"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
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
      <div className="card border-0">
        <img
          className="card-img-top"
          src="https://picsum.photos/1000/1000?random=6"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
        </div>
      </div>
    </div>

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
