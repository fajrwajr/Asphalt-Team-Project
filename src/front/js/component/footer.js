import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer class="container-fluid mt-5">
      <div class="card mx-5">
        <div class="row mb-4 ">
          <div class="col-md-4 col-sm-11 col-xs-11">
            <div class="footer-text pull-left">
              <div class="d-flex">
                <h1
                  class="font-weight-bold mr-2 px-3"
                  style="color:#16151a; background-color:#957bda"
                ></h1>
                <h1 style="color: #957bda">Devs</h1>
              </div>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi non pariatur numquam animi nam at impedit odit nisi.
              </p>

              <div class="social mt-2 mb-3">
                <i class="fa-facebook-official fa-lg"></i>
                <i class="fa-instagram fa-lg"></i>
                <i class="fa-twitter fa-lg"></i>
                <i class="fa-linkedin-square fa-lg"></i>
                <i class="fa-facebook"></i>
              </div>
            </div>
          </div>

          <div class="col-md-2 col-sm-1 col-xs-1 mb-2"></div>

          <div class="col-md-2 col-sm-4 col-xs-4">
            <h5 class="heading">Services</h5>
            <ul>
              <li>IT Consulting -</li>
              <li>Development</li>
              <li>Cloud</li>
              <li>DevOps & Support</li>
            </ul>
          </div>

          <div class="col-md-2 col-sm-4 col-xs-4">
            <h5 class="heading">Industries</h5>
            <ul class="card-text">
              <li>Finance</li>
              <li>Public Sector</li>
              <li>Smart Office</li>
              <li>Retail</li>
            </ul>
          </div>

          <div class="col-md-2 col-sm-4 col-xs-4">
            <h5 class="heading">Company</h5>
            <ul class="card-text">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Join Us</li>
            </ul>
          </div>
        </div>

        <div class="divider mb-4"></div>

        <div class="row" style="font-size:10px;">
          <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="pull-left">
              <p>
                <i class="fa fa-copyright"></i> 2020 thezpdesign
              </p>
            </div>
          </div>

          <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="pull-right mr-4 d-flex policy">
              <div>Terms of Use</div>
              <div>Privacy Policy</div>
              <div>Cookie Policy</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
