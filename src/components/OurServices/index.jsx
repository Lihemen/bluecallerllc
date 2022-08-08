import React from "react";
import { HiOutlineHome, HiOutlineCog } from "react-icons/hi";
import { MdPhoneIphone } from "react-icons/md";
import { IoLaptopOutline, IoCloudDoneOutline } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Rotate } from "react-awesome-reveal";

import "./ourservices.css";

export const OurServices = () => {
  return (
    <section className="services__card">
      <h3>Our Services</h3>
      <h1>The Ultimate Possibility of The Future</h1>

      <div className="services__grid">
        <Rotate cascade triggerOnce>
          <div className="card">
            <span className="icon">
              <HiOutlineHome />
            </span>
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, facilis.
            </p>

            <Link to="/services/web-development">Read More</Link>
          </div>
          <div className="card">
            <span className="icon">
              <HiOutlineCog />
            </span>
            <h3>SEO Marketing</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, facilis.
            </p>

            <Link to="/services/seo-marketing">Read More</Link>
          </div>
          <div className="card">
            <span className="icon">
              <MdPhoneIphone />
            </span>
            <h3>App Development</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, facilis.
            </p>

            <Link to="/services/app-development">Read More</Link>
          </div>
          <div className="card">
            <span className="icon">
              <IoCloudDoneOutline />
            </span>
            <h3>Digital Marketing</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, facilis.
            </p>

            <Link to="/services/digital-marketing">Read More</Link>
          </div>
          <div className="card">
            <span className="icon">
              <IoLaptopOutline />
            </span>
            <h3>Social Media Marketing</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, facilis.
            </p>

            <Link to="/services/social-media">Read More</Link>
          </div>
          <div className="card">
            <span className="icon">
              <AiOutlineEye />
            </span>
            <h3>Product Design</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, facilis.
            </p>

            <Link to="/services/product-design">Read More</Link>
          </div>
        </Rotate>
      </div>
    </section>
  );
};

