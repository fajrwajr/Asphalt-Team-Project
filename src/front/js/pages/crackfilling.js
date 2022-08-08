import React from "react";
import image8 from "../../img/cracksealing3.jpg";
import { Link } from "react-router-dom";

export const Crackfilling = () => {
  return (
    <div>
      <img src={image8} className="servicepagesimg" />

      <p className="text-warning servicepages">
        <h1>Hot Pour Crack Filling</h1>
        Crack sealing your parking area on a yearly basis is the most cost
        effective way to reduce costly asphalt repairs. Nashville Sealing &
        Striping uses only the highest grade hot rubberized crack sealing
        material exceeding federal specifications. Our material will not track
        in any situation.
        <br></br>• Prevents water intrusion - The number one cause of asphalt
        failure.
        <br></br>• Most cost effective way to protect your asphalt investment.
        <br></br>• This highly elastic material remains flexible to temperatures
        of 20 below zero. illing page
        <br></br>
        <br></br>
        <Link className="btn btn-warning" type="button" to="/contact">
          Interested?
        </Link>
      </p>
    </div>
  );
};
