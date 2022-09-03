import React from "react";
import { Link } from "react-router-dom";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";

export const Footer = () => {
  return (
    <>
      <footer className="bg-dark w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h1 className="text-warning">
                <h5 className="h1 text-white">Thats how asphalt is done. </h5>
                Nashville Asphalt.
              </h1>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Questions?</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <Link to="/contact">Get in touch</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick Info</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="#">Phone Number</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
