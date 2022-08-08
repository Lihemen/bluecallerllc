import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";

import { MobileMenu } from "../MobileMenu";

import logo from "../../assets/icon.webp";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" width={32} height={32} />
          <NavLink to="/">BlueCaller </NavLink>
        </div>
        <ul className="nav__links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
        <div className="search">
          <FaSearch />

          <NavLink to="/contact" className="contact__link">
            Contact
          </NavLink>
        </div>
        <FaBars className="menu__btn" onClick={() => setShow(true)} />
      </nav>
      <MobileMenu show={show} close={() => setShow(false)} />
    </header>
  );
};

