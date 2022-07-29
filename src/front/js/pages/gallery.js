import React from "react";
import { Navbar } from "../component/navbar";
import image1 from "../../img/asphalt2.jpg";
import image2 from "../../img/asphalt2.jpg";
import image3 from "../../img/asphalt3.jpg";
import image4 from "../../img/asphalt4.jpg";
import image5 from "../../img/asphalt5.jpg";
import image6 from "../../img/asphalt6.jpg";

export const Gallery = () => {
  return (
    <div class="row gallery">
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src={image1}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />

        <img
          src={image2}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src={image3}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />

        <img
          src={image4}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src={image5}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Waves at Sea"
        />

        <img
          src={image6}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
        />
      </div>
      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src={image3}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />

        <img
          src={image4}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>
      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src={image3}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />

        <img
          src={image4}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>
      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src={image3}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />

        <img
          src={image4}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>
    </div>
  );
};
