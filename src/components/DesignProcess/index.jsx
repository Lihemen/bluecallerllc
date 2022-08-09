import React from "react";
import { FaPen } from "react-icons/fa";
import { HiOutlineCog } from "react-icons/hi";
import { BsFillDice6Fill } from "react-icons/bs";

import { Fade } from "react-awesome-reveal";

import "./designprocess.css";

export const DesignProcess = () => {
  return (
    <section className="services__card pt-4r">
      <h3>How we Work</h3>
      <h1>Inventing and Making It Happen</h1>
      <div className="services__grid design">
        <Fade cascade triggerOnce>
          <div className="card">
            <FaPen className="icon" />
            <h3>01. Process</h3>
            <p>
              We start with a thorough understanding of your business and your
              goals. We then work together to create a design that is unique and
              functional.
            </p>
          </div>
          <div className="card">
            <HiOutlineCog className="icon" />
            <h3>02. Execution</h3>
            <p>
              We develop the design and execute it. We then test the product and
              make sure it is functional, robust and meets your business goals.
            </p>
          </div>
          <div className="card">
            <BsFillDice6Fill className="icon" />
            <h3>03. Result</h3>
            <p>
              We deliver the product with the highest quality and the most
              efficient cost, with the necessary guarantee of scalability and
              reliability.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

