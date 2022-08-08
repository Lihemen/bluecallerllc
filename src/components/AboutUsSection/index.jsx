import React from "react";
import teamtogether from "../../assets/teamtogether.webp";
import {
  IoDiamondOutline,
  IoFlagOutline,
  IoStatsChartOutline,
} from "react-icons/io5";

import { JackInTheBox, Slide } from "react-awesome-reveal";

import testimonial1 from "../../assets/testimonial1.webp";
import testimonial2 from "../../assets/testimonial2.webp";
import testimonial3 from "../../assets/testimonial3.webp";

import "./aboutussection.css";

export const AboutUsSection = () => {
  return (
    <section className="about__hero">
      <JackInTheBox triggerOnce delay={200}>
        <div className="image__container">
          <img src={teamtogether} alt="team holding hands together" />
          <div className="card">
            <p>
              <span>20,000+</span> <IoStatsChartOutline />{" "}
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className="icons">
              <img src={testimonial1} alt="person1" />
              <img src={testimonial2} alt="person2" />
              <img src={testimonial3} alt="person3" />
            </div>
          </div>
        </div>
      </JackInTheBox>
      <div className="col">
        <Slide direction="right" triggerOnce>
          <h3>About Us</h3>
          <h1>We Create The Perfect Tech Experience</h1>
          <p></p>

          <ul>
            <li>
              <span className="icon">
                <IoDiamondOutline />
              </span>
              <div>
                <h4>Our Vision</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ea, dolor earum consequuntur, quisquam ab in esse
                  nihil voluptatibus aliquid necessitatibus delectus alias omnis
                  obcaecati quas vitae corrupti odit. Corporis?
                </p>
              </div>
            </li>
            <li>
              <span className="icon">
                <IoFlagOutline />
              </span>
              <div>
                <h4>Our Mission</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ea, dolor earum consequuntur, quisquam ab in esse
                  nihil voluptatibus aliquid necessitatibus delectus alias omnis
                  obcaecati quas vitae corrupti odit. Corporis?
                </p>
              </div>
            </li>
          </ul>
        </Slide>
      </div>
    </section>
  );
};

