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
      <h3 className="service__sec-title">Our Services</h3>
      <h1 className="service__title">The Ultimate Possibility of The Future</h1>

      <div className="services__grid">
        <Rotate cascade triggerOnce duration={750}>
          <div className="card">
            <span className="icon">
              <HiOutlineHome />
            </span>
            <h3>Web Development</h3>
            <p>
              We have a team of web developers and designers who are passionate
              about creating the best user experience.
            </p>

            <Link to="/services/web-development">Read More</Link>
          </div>
          <div className="card">
            <span className="icon">
              <HiOutlineCog />
            </span>
            <h3>SEO Marketing</h3>
            <p>
              We generate the best results for our clients by using the latest
              SEO practices to optimize their website and generate traffic.
            </p>

            <Link to="/services/seo-marketing">Read More</Link>
          </div>
          <div className="card">
            <span className="icon">
              <MdPhoneIphone />
            </span>
            <h3>App Development</h3>
            <p>
              We have a team of mobile developers and designers who are
              determined to provide user-friendly and modern applications.
            </p>

            <Link to="/services/app-development">Read More</Link>
          </div>
          <div className="card">
            <span className="icon">
              <IoCloudDoneOutline />
            </span>
            <h3>Digital Marketing</h3>
            <p>
              We help clients create digital messaging, grow their digital and
              physical presence, connecting with new audience and customers.
            </p>

            <Link to="/services/digital-marketing">Read More</Link>
          </div>
          <div className="card">
            <span className="icon">
              <IoLaptopOutline />
            </span>
            <h3>Social Media Marketing</h3>
            <p>
              We are poised to increasing social media interactions and
              engagements to promote adoption of client products and services.
            </p>

            <Link to="/services/social-media">Read More</Link>
          </div>
          <div className="card">
            <span className="icon">
              <AiOutlineEye />
            </span>
            <h3>Product Design</h3>
            <p>
              Creating eye-catching and clean designs that communicate the brand
              identity and message is what we achieve at Bluecaller.
            </p>

            <Link to="/services/product-design">Read More</Link>
          </div>
        </Rotate>
      </div>
    </section>
  );
};

