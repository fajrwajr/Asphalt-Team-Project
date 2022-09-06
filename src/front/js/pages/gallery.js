import React from "react";
import image1 from "../../img/cracksealing.jpeg";
import image2 from "../../img/pavingroad.jpg";
import image3 from "../../img/road.jpg";
import image4 from "../../img/striping.jpg";
import image5 from "../../img/cracksealing2.jpg";
import image6 from "../../img/walmartparkinglot.jpg";

export const Gallery = () => {
  return (
    <div className="row gallery">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src={image1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
        <img
          src={image2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
      </div>
      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src={image3}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />
        <img
          src={image4}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>
      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src={image5}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Waves at Sea"
        />
        <img
          src={image6}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
        />
      </div>
    </div>
  );
};
