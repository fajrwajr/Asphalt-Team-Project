import React from "react";
import { Link } from "react-router-dom";
import image4 from "../../img/striping.jpg";

export const Stripingandsignage = () => {
  return (
    <div>
      <img src={image4} className="servicepagesimg" />
      <p className="text-warning servicepages">
        <h1>Striping & Signage</h1>
        <bold>Nashville Asphalt Sealing & Striping</bold> offers complete layout
        and line striping services using the best striping equipment and quality
        paint available. Our superior service is well known by commercial
        contractors. We offer competitive quotes and work to complete the job
        promptly.
        <br></br>
        We will execute your design layout, inspect and install all necessary
        line striping to ensure your compliance with the Americans with
        Disabilities Act (ADA).
        <br></br>
        <h3>STRIPING SERVICES</h3>• ADA Compliance
        <br></br>• Striping Removal
        <br></br>• Driver Training Course
        <br></br>• Directional Thermoplastic & 3M Stencils
        <br></br>• Light Pole Bases
        <br></br>• Crosswalks / Access
        <br></br>• Stenciling
        <br></br>• Commercial / Municipal Striping
        <br></br>• Handicapped
        <br></br>• Fire Lane
        <br></br>• No Parking
        <br></br>• Indoor Warehouse Striping
        <br></br>• Running Tracks
        <br></br>• Airports
        <br></br>
        <h3>SAFETY</h3>
        Professional Line Striping assists your visitors in the safe use of your
        parking lot. It directs traffic to the proper route of entrance and
        exit, allowable areas to park, loading zones, crosswalks, and defines
        drive aisles that are wide enough to avoid accidents with cars and
        pedestrians. Properly designed parking spaces also maximize the number
        of cars you can safely accommodate.
        <br></br>
        <h3>UPGRADE PROPERTY APPEARANCE</h3>
        Customers appreciate a well designed and well marked parking system. The
        parking lot is the first thing that customers or visitors see. A freshly
        painted parking lot can lend an attractive impression to the overall
        image of your property.
        <br></br>
        <h3>QUALITY</h3>
        At Missouri Asphalt Sealing & Striping, we expertly apply line striping
        so that it results in consistent, sharp lines with well defined edges,
        starts and stops.
        <br></br>
        <h3>SIGNAGE</h3>
        Missouri Asphalt Sealing & Striping offers services in Signage
        installation, Bollard Installation, Concrete Bumper Block installation,
        etc.
        <br></br>
        <br></br>
        <Link className="btn btn-warning" type="button" to="/contact">
          Interested?
        </Link>
      </p>
    </div>
  );
};
