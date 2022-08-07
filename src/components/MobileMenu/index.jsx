import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import "./mobilemenu.css";

export const MobileMenu = ({ show, close }) => {
  function MobileLink({ to, label }) {
    return (
      <li>
        <Link to={to} onClick={close}>
          {label}{" "}
        </Link>
      </li>
    );
  }

  return (
    <aside className={`mobile__menu ${show ? "active" : undefined}`}>
      <FaTimes id="close" onClick={close} />
      <ul>
        <MobileLink to="/" label="Home" />
        <MobileLink to="/about" label="About Us" />
        <MobileLink to="/services" label="Our Services" />
        <MobileLink to="/contact" label="Contact Us" />
      </ul>
    </aside>
  );
};

