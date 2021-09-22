import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import emailjs, { init } from "emailjs-com";
import colorado from "../images/colorado.jpeg";

init("user_O3fnJRPqFFpVuOnsq5fkJ");


function Contact() {
  
  const history = useHistory();
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_4yb1rua', 'contact_form', form.current, 'user_O3fnJRPqFFpVuOnsq5fkJ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
     
    history.push('/');
  }
  
  return (
    <>
      <div className="container-fluid ">
          <div className="row align-items-center p-3">
            <div className="col text-center">
                  <p className="lead">
                    There are a few ways to reach me, the best methods
                    are going to be via the email form below, LinkedIn,
                    or on Discord @OldSport41 #9360
                  </p>
                <div className="btn-group">
                  <a href="https://www.linkedin.com/in/erichill41/" target="blank">
                      <button type="button" className="btn btn-outline-dark">
                          Connect on LinkedIn
                      </button>
                  </a>
                  <a href="https://github.com/erichill41" target="blank">
                      <button type="button" className="btn btn-outline-dark">
                          View My GitHub Profile
                      </button>
                  </a>
              </div>
            </div>
            <div className="col text-center">
              <figure className="figure">
                <img
                  src={colorado}
                  alt="Map of NoCo"
                  className="figure-img img-fluid rounded"
                />
                <figcaption className="figure-caption"> I live in Northern Colorado and would like to find work in this area. </figcaption>
              </figure>
            </div>
          </div>
          
          <form
            className="form-group mb-4"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="row">
              <div className="col">
              <label> First Name </label>
                <input
                  type="text"
                  name="user_first"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label> Last Name </label>
                  <input
                    type="text"
                    name="user_last"
                    className="form-control"
                  />
              </div>
            </div>
          <div className="row">
            <div className="col">
              <label> Email </label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                  />
            </div>
            <div className="col">
              <label> Message </label>
                <textarea
                  name="message"
                  className="form-control"
                />
            </div>
          </div>
            <button
              type="submit"
              className="btn btn-outline-dark mt-2"
              value="Send"
            >
              Send Email
            </button>
          </form>
      </div>
    </>
  );
}

export default Contact;