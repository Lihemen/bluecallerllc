import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../../assets/icon.webp";

import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="level__1">
        <h3>LET'S WORK</h3>
        <div>
          <h1>Bring your ideas to life</h1>
          <div className="links">
            <Link to="#">Get Started</Link>
            <Link to="#">
              <FaPhoneAlt /> Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="level__2">
        <div className="company">
          <h3 translate="no">
            <img src={logo} alt="LOGO" width={40} height={40} /> BLUECALLER
          </h3>
          <p>
            We create websites and apps with the greatest of care and deliver
            only the best.
          </p>
        </div>

        <div className="links__grid">
          <div className="col">
            <h3>Contacts</h3>
            <ul>
              <li>
                <a href="mailto:info@bluecallerllc.com">
                  info@bluecallerllc.com
                </a>
              </li>
              <li>
                <a href="tel:07011056442">+1 (917) 917-917</a>
              </li>
              <li>
                <a href="/#">Zitel Plaza, P.O.W Mafemi Crescent, Utako</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Quicklinks</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Support</h3>
            <ul>
              <li>
                <Link to="/company/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/company/privacy-policy">Policy</Link>
              </li>
              <li>
                <Link to="/company/careers">Career</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="level__3">
        <p>Copyright &copy; {new Date().getFullYear()} Bluecaller</p>
        <ul className="social__links">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/bluecallerllc"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/bluecallerllc"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com?send="
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

