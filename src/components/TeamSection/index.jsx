import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import profile from "../../assets/profile.webp";

import "./teamsection.css";

export const TeamSection = () => {
  return (
    <div className="team__section">
      <h3>Our Team</h3>
      <h1>Meet Our Professionals</h1>
      <div className="team__grid">
        <div className="col">
          <img src={profile} alt=" shima aga" />
          <h3>Shima Aga</h3>
          <span>Chief Executive Officer</span>
          <ul>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <img src={profile} alt=" shima aga" />
          <h3>Joseph Abasi</h3>
          <span>Chief Operating Officer</span>
          <ul>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <img src={profile} alt=" shima aga" />
          <h3>Jamil Abubakar</h3>
          <span>Chief Analyst</span>
          <ul>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <img src={profile} alt=" shima aga" />
          <h3>Lan Hemense</h3>
          <span>Web Engineer</span>
          <ul>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

