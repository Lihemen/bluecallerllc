import React from "react";
import { Fade } from "react-awesome-reveal";
import { BsFillDice6Fill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { HiOutlineCog } from "react-icons/hi";

export const DesignProcess = () => {
  return (
    <section className="margin-y">
      <h3 className="section-title">How we Work</h3>
      <h1 className="text-center">Inventing and Making It Happen</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-10 gap-10 container">
        <Fade
          cascade
          triggerOnce>
          <div className=" flex flex-col items-center border p-8 border-bluecaller-900 rounded-xl text-center gap-8">
            <FaPen className="w-16 h-16 bg-bluecaller-400 p-3 rounded-full text-white" />
            <h3 className="section-title"> Process</h3>
            <p className="leading-8">
              We start with a thorough understanding of your business and your
              goals. We then work together to create a design that is unique and
              functional.
            </p>
          </div>
          <div className=" flex flex-col items-center border p-8 border-bluecaller-900 rounded-xl text-center gap-8">
            <HiOutlineCog className="w-16 h-16 bg-bluecaller-400 p-3 rounded-full text-white" />
            <h3 className="section-title"> Execution</h3>
            <p className="leading-8">
              We develop the design and execute it. We then test the product and
              make sure it is functional, robust and meets your business goals.
            </p>
          </div>
          <div className=" flex flex-col items-center border p-8 border-bluecaller-900 rounded-xl text-center gap-8">
            <BsFillDice6Fill className="w-16 h-16 bg-bluecaller-400 p-3 rounded-full text-white" />
            <h3 className="section-title"> Result</h3>
            <p className="leading-8">
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
