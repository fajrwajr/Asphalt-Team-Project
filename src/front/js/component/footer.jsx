import React from "react";
import { Link } from "react-router-dom";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";

export const Footer = () => {
  return (
    <>
      <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
          <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
              <h5 class="h1 text-white">
                Thats how asphalt is done.{" "}
                <h1 className="text-warning">Nashville Asphalt.</h1>
              </h5>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Questions?</h5>
              <ul class="list-unstyled text-muted">
                <li>
                  <Link to="/contact">Get in touch</Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Quick Info</h5>
              <ul class="list-unstyled text-muted">
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
