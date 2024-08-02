import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/icon.webp";
import { MobileMenu } from "../MobileMenu";

const NavbarLink = (props) => {
  return (
    <li>
      <NavLink
        to={props.to}
        className={({ isActive }) =>
          `uppercase text-sm tracking-widest ${
            isActive && "text-bluecaller-100"
          }`
        }>
        {props.name}
      </NavLink>
    </li>
  );
};

export const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="bg-bluecaller-900">
        <nav className="container py-4 text-white justify-between flex items-center">
          <Link
            to="/"
            className="flex gap-2 items-center">
            <img
              src={logo}
              alt="Bluecaller"
              className="w-16"
            />{" "}
            <h3 className="text-3xl uppercase font-serif font-bold">
              Bluecaller
            </h3>
          </Link>
          <ul className="lg:flex items-center gap-12 hidden">
            <li>
              <NavbarLink
                to="/"
                name="Home"
              />
            </li>
            <li>
              <NavbarLink
                to="/about"
                name="About Us"
              />
            </li>
            <li>
              <NavbarLink
                to="/services"
                name="Our Services"
              />
            </li>
            <li>
              <NavbarLink
                to="/contact-us"
                name="Contact"
              />
            </li>
          </ul>
          <Link
            to="/services"
            className="p-4 text-sm uppercase backdrop-blur-sm bg-white/30 rounded-3xl hidden lg:flex ">
            Get Started{" "}
          </Link>
          <button
            onClick={() => setShow(true)}
            className="lg:hidden">
            <FaBars size={32} />
          </button>
        </nav>
      </header>
      <MobileMenu
        show={show}
        close={() => setShow(false)}
      />
    </>
  );
};
