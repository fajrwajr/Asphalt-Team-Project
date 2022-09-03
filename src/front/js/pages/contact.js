import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
export const Contact = () => {
  const { store, actions } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 m-auto">
              <div className="contact-form">
                <h1>Get in Touch</h1>
                <form action="https://formspree.io/f/mqkjeagd" method="POST">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          placeholder="Name"
                          name="Name"
                          type="text"
                          className="form-control"
                          id="inputName"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmfor="inputEmail">Email</label>
                        <input
                          placeholder="Email"
                          name="Email"
                          type="email"
                          className="form-control"
                          id="inputEmail"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      placeholder="Subject"
                      name="Subject"
                      type="text"
                      className="form-control"
                      id="inputSubject"
                      required
                    />
                    <label>Phone Number</label>
                    <input
                      placeholder="Phone Number"
                      name="Phone Number"
                      type="text"
                      className="form-control"
                      id="inputNumber"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="Message"
                      placeholder="How can we help you?"
                      className="form-control"
                      id="inputMessage"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      id="emailMe"
                      href="mailto:lawhead.gavin@live.jobcorps.org"
                    >
                      <i className="fa fa-paper-plane"></i> Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
