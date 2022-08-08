import React from "react";

import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

import "./pageheader.css";

export const PageHeader = ({ name, link }) => {
  return (
    <section className="single__page__header">
      <Slide direction="up" triggerOnce>
        <h2>{name}</h2>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/${link}`}>{name}</Link>
          </li>
        </ul>
      </Slide>
    </section>
  );
};

