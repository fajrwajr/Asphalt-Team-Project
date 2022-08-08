import React from "react";
import image2 from "../../img/pavingroad.jpg";
import { Link } from "react-router-dom";

export const Paving = () => {
  return (
    <div className="">
      <img src={image2} className="servicepagesimg" />
      <p className="text-warning servicepages">
        <h1>Asphalt Paving & Repair</h1>
        <bold>Nahshville Asphalt Sealing & Striping</bold> is the Preferred
        contractor in the St. Louis area, providing asphalt paving services to
        numerous municipal, commercial and residential customers. We offer
        personalized service in all phases of the pavement industry, parking
        lots, or other asphalt surfaces.
        <br></br>
        Having been in the business of maintaining asphalt for over 20 years,
        our team of skilled employees is committed to doing the job right the
        first time. We stay up-to-date on the most recent advances in products,
        equipment and asphalt applications.
        <br></br>
        <h3>CONSTRUCTION SERVICES</h3>• Asphalt Paving
        <br></br>• Asphalt Overlay
        <br></br>• Asphalt Patching
        <br></br>• Asphalt Curb
        <br></br>• Asphalt Milling
        <br></br>• New Construction
        <br></br>• Pothole Repair
        <br></br>• Drainage Control
        <br></br>• ADA Compliance
        <br></br>
        <h3>PARKING AREAS</h3>• Shopping and Retail Centers
        <br></br>• Office Buildings
        <br></br>• Manufacturing Facilities
        <br></br>• Warehouses and Truck Terminals
        <br></br>• Apartment Complexes
        <br></br>• Schools and Parks
        <br></br>• Subdivisions
        <br></br>• Municipalities
        <br></br>• Churches
        <br></br>
        <h3>Hot Mix Asphalt (HMA)</h3>
        <bold>Nashville Asphalt Sealing & Striping</bold> uses hot mix asphalt
        (HMA), consisting of a combination of crushed aggregate, air and liquid
        asphalt cement. The proper design of mixes, combination of aggregates,
        and liquid asphalt cement is essential to the production of durable
        pavement that will handle loads. We use only the best quality Hot Mix
        Asphalt to ensure the pavement meets all requirements.
        <br></br>
        We maintain equipment and qualified paving crews for large metropolitan
        projects which require the use of multiple pavers, smaller projects such
        as parking lots, driveways, sidewalks, or specialty projects such as
        golf cart and bicycle paths, court areas, and race tracks. <br></br>
        <br></br>
        <Link className="btn btn-warning" type="button" to="/contact">
          Interested?
        </Link>
      </p>
    </div>
  );
};
