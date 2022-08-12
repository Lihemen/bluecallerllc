import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import { Slide } from "react-awesome-reveal";

import "./completedprojects.css";

export const CompletedProjects = () => {
  const getQuote = (values) => {
    console.log(values);
  };
  return (
    <div className="completedprojects">
      <div className="count">
        <Slide direction="left" className="slide__1" triggerOnce>
          <div className="column">
            <div className="col__projects">
              <h1>
                20 <span className="plus">+</span>{" "}
              </h1>
              <p>Projects</p>
              <Link to="/projects">Our Projects</Link>
            </div>
            <div className="col__awards">
              <h1>
                10 <span className="plus">+</span>{" "}
              </h1>
              <p>Awards</p>
              <Link to="/team#achievements">Our Achievements</Link>
            </div>
          </div>
        </Slide>
        <Slide direction="up" triggerOnce className="slide__2">
          <div className="column">
            <h2 style={{ color: "#fff" }}>Digitize Your Business</h2>
            <p>
              Integrity First. Service Always. Innovation Never Ceases. Grow
              your business and reach out to connect people through information.
              We offer seamless connection through total connectivity
            </p>
            <Link to="/contact">Contact Us</Link>
          </div>
        </Slide>
      </div>
      <div className="quote">
        <p>
          Inventing not for business, inventing for the future. Get a free
          quote.{" "}
        </p>
        <Formik initialValues={{ email: "" }} onSubmit={getQuote}>
          <Form>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
            />
            <button type="submit">Get Quote</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

