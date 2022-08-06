import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Contact = () => {
  const { store, actions } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="contactform container">
        <div className="text-center mt-5">
          <h1>Nashville Asphalt Contact Form</h1>
        </div>
        <div className="row">
          <div className="col-lg-7 mx-auto contactform">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form" role="form">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlfor="form_name">Firstname *</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              onChange={(e) => setFirstName(e.target.value)}
                              className="form-control"
                              placeholder="Please enter your firstname *"
                              required="required"
                              data-error="Firstname is required."
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlfor="form_lastname">Lastname *</label>
                            <input
                              id="form_lastname"
                              type="text"
                              name="surname"
                              onChange={(e) => setLastName(e.target.value)}
                              className="form-control"
                              placeholder="Please enter your lastname *"
                              required="required"
                              data-error="Lastname is required."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlfor="form_email">Email *</label>
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control"
                              placeholder="Please enter your email *"
                              required="required"
                              data-error="Valid email is required."
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlfor="form_need">
                              Please specify your need *
                            </label>
                            <select
                              id="form_need"
                              name="need"
                              className="form-control"
                              required="required"
                              data-error="Please specify your need."
                            >
                              <option value="" selected disabled></option>
                              <option>Request Invoice for order</option>
                              <option>Request order status</option>
                              <option>Haven't received cashback yet</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlfor="form_message">Message *</label>
                            <textarea
                              id="form_message"
                              name="message"
                              onChange={(e) => setMessage(e.target.value)}
                              className="form-control"
                              placeholder="Write your message here."
                              rows="4"
                              required="required"
                              data-error="Please, leave us a message."
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <button
                            type="submit"
                            onClick={() =>
                              actions.sendMessage({
                                firstName,
                                lastName,
                                email,
                                message,
                              })
                            }
                            className="btn btn-success btn-send pt-2 btn-block"
                            value="Send Message"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
