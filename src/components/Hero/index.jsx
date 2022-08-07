import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import heroimg1 from "../../assets/heroimg1.webp";
import heroimg2 from "../../assets/heroimg2.webp";

import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <Slide triggerOnce direction="up">
        <div className="hero__text">
          <h4 translate="no" className="company__name">
            BLUECALLER INTEGRATED SERVICES
          </h4>
          <h1 className="hero__title">The Technology Works for Tomorrow</h1>
          <p>
            Consulting. Integration. Innovation. Bluecaller is positioned to
            delivering the ideal solutions to scale your business and reach out
            to new customers.
          </p>
          <Link to="#">Learn More</Link>
        </div>

        <div className="hero__images">
          <img src={heroimg1} alt="team meeting around a computer" />
          <img src={heroimg2} alt="developer pointing to a laptop" />
        </div>
      </Slide>
    </section>
  );
};

