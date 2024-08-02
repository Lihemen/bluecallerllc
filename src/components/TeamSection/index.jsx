import React from "react";

import ceo from "../../assets/ceo.jpeg";
import coo from "../../assets/coo.jpeg";
import headofdata from "../../assets/headofdata.jpeg";
import leadengineer from "../../assets/leadengineer.jpg";
import { Profile } from "../Profile";

export const TeamSection = () => {
  return (
    <div className="">
      <h3 className="section-title">Our Team</h3>
      <h1 className="text-center">Meet Our Professionals</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 padding-y text-center">
        <Profile
          name="shima aga"
          image={ceo}
          title="CEO / co-founder"
          facebook="#"
          linkedin="#"
          twitter="#"
        />
        <Profile
          name="joseph obasi"
          image={coo}
          title="coo / co-founder"
          facebook="#"
          linkedin="#"
          twitter="#"
        />
        <Profile
          name="Iwenjiora Chukwuma"
          image={headofdata}
          title="head of data"
          facebook="#"
          linkedin="#"
          twitter="#"
        />
        <Profile
          name="Hemense Lan"
          image={leadengineer}
          title="lead engineer"
          facebook="MrHilz"
          linkedin="hemense-lan"
          twitter="lih_codes"
        />
      </div>
    </div>
  );
};
