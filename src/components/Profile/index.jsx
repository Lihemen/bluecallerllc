import React from "react";

import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Profile = ({
  name,
  image,
  title,
  facebook,
  linkedin,
  twitter,
}) => {
  return (
    <div className="col">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <span>{title}</span>
      <ul>
        <li>
          <a
            href={`https://facebook.com/${facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href={`https://linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

