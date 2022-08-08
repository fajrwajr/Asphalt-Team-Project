import React from "react";
import image9 from "../../img/pavingroad2.jpg";
import { Link } from "react-router-dom";

export const Sealcoating = () => {
  return (
    <div className="">
      <img src={image9} className="img-fluid servicepagesimg" alt="..." />
      <p className="text-warning servicepages">
        <h1>Asphalt Sealing & Striping</h1>
        <bold>Nashville Asphalt Sealing & Striping</bold> is Nashville's Premier
        Seal Coating Contractor. Our highly trained crews and state of the art
        application equipment will assure that your project is completed in a
        timely and professional manner.
        <br></br>• Sunlight causes an asphalt surface to "dry out" through
        oxidation and become brittle. Seal coating will keep the sun from drying
        out the asphalt and will retain the vital asphalt binder needed for a
        long surface life.
        <br></br>• Asphalt is a porous surface which allows water to pass
        through it causing the subsurface to soften and fail. Seal coating fills
        the asphalt pores which keeps water on the surface. As a result, the
        sub-base remains stable reducing the potential of asphalt failure.
        <br></br>• Petroleum spills (vehicle oil leaks) soften the asphalt and
        causes failure. Seal coating will protect the asphalt from oil
        intrusion, which reduces costly asphalt repairs.
        <br></br>• Provides a deep black, attractive appearance inviting your
        customers to your facility.
        <br></br>
        <br></br>{" "}
        <Link className="btn btn-warning" type="button" to="/contact">
          Interested?
        </Link>
      </p>
    </div>
  );
};
