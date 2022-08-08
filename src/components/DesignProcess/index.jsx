import React from "react";
import { FaPen } from "react-icons/fa";
import { HiOutlineCog } from "react-icons/hi";
import { BsFillDice6Fill } from "react-icons/bs";

import "./designprocess.css";

export const DesignProcess = () => {
  return (
    <section className="design__process">
      <h3>How we Work</h3>
      <h1>Inventing and Making It Happen</h1>
      <div className="design__grid">
        <div className="col">
          <FaPen className="icon" />
          <h3>01. Process</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            deleniti provident, voluptate sequi adipisci dolores commodi ipsam
            hic vitae ab.
          </p>
        </div>
        <div className="col">
          <HiOutlineCog className="icon" />
          <h3>02. Execution</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            deleniti provident, voluptate sequi adipisci dolores commodi ipsam
            hic vitae ab.
          </p>
        </div>
        <div className="col">
          <BsFillDice6Fill className="icon" />
          <h3>03. Result</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            deleniti provident, voluptate sequi adipisci dolores commodi ipsam
            hic vitae ab.
          </p>
        </div>
      </div>
    </section>
  );
};

