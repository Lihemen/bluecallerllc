import "./aboutussection.css";

import React from "react";
import { JackInTheBox, Slide } from "react-awesome-reveal";
import { FaHands } from "react-icons/fa";
import {
  IoDiamondOutline,
  IoFlagOutline,
  IoStatsChartOutline,
} from "react-icons/io5";

import teamtogether from "../../assets/teamtogether.webp";
import testimonial1 from "../../assets/testimonial1.webp";
import testimonial2 from "../../assets/testimonial2.webp";
import testimonial3 from "../../assets/testimonial3.webp";

export const AboutUsSection = () => {
  return (
    <section className="container padding-y about__hero">
      <JackInTheBox
        triggerOnce
        delay={200}>
        <div className="image__container text-white">
          <img
            src={teamtogether}
            alt="team holding hands together"
            className="rounded-xl"
          />
          <div className="card rounded-xl bg-bluecaller-800 bg-opacity-90">
            <p>
              <span>5,000+</span> <IoStatsChartOutline />{" "}
            </p>
            <p>Trusted customers all over the world.</p>

            <div className="icons flex pt-4">
              <img
                src={testimonial1}
                alt="person1"
              />
              <img
                src={testimonial2}
                alt="person2"
              />
              <img
                src={testimonial3}
                alt="person3"
              />
            </div>
          </div>
        </div>
      </JackInTheBox>
      <div className="col">
        <Slide
          direction="right"
          triggerOnce>
          <h3 className="font-serif !font-semibold !text-bluecaller-400">
            About Us
          </h3>
          <h1>We Create The Perfect Tech Experience</h1>
          <p></p>

          <ul>
            <li>
              <span className="text-bluecaller-50 w-16 h-16 bg-bluecaller-900 rounded-full flex items-center justify-center mr-8 text-4xl p-3">
                <IoDiamondOutline />
              </span>
              <div>
                <h4>Our Vision</h4>
                <p>
                  Our vision is to be the leading software development company
                  in sub-saharan Africa by providing services that are
                  cost-effective, reliable, and technologically advanced. We are
                  committed to providing our clients with the best possible
                  solutions.
                </p>
              </div>
            </li>
            <li>
              <span className="text-bluecaller-50 w-16 h-16 bg-bluecaller-900 rounded-full flex items-center justify-center mr-8 text-4xl p-3">
                <IoFlagOutline />
              </span>
              <div>
                <h4>Our Mission</h4>
                <p>
                  Bluecaller's mission is to serve as a trusted partner to our
                  clients by responsibly providing software services that enable
                  growth and business development by creating new ways to
                  connect with your customers.
                </p>
              </div>
            </li>
            <li>
              <span className="text-bluecaller-50 w-16 h-16 bg-bluecaller-900 rounded-full flex items-center justify-center mr-8 text-4xl p-3">
                <FaHands />
              </span>
              <div>
                <h4>Our Values</h4>
                <p>
                  We hold ourselves to the highest standards of excellence and
                  strive to exceed expectations in all areas of our work. We are
                  committed to delivering high-quality results on time, every
                  time. We encourage our team members to bring their unique
                  perspectives and ideas to the table, and we celebrate the
                  diversity that makes us stronger as a team. Together, these
                  values guide our actions and shape our culture as we work
                  towards our shared goals.
                </p>
              </div>
            </li>
          </ul>
        </Slide>
      </div>
    </section>
  );
};
