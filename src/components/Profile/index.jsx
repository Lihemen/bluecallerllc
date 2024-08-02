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
    <div className="flex flex-col bg-bluecaller-50 p-8 rounded-xl gap-6 items-center">
      <img
        src={image}
        alt={name}
        className="rounded-full w-72 h-72 object-cover object-center"
      />
      <h3 className="capitalize text-2xl tracking-wider">{name}</h3>
      <span className="uppercase font-bold">{title}</span>
      <ul className="flex gap-3 justify-evenly child:text-xl child:flex child:rounded-full child:bg-bluecaller-800 child:p-2 child:child:text-white hover:child:scale-125 child:transition child:duration-300">
        <li>
          <a
            href={`https://facebook.com/${facebook}`}
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href={`https://linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};
