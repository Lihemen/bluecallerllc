import React from "react";
import profile from "../../assets/profile.webp";
import hemense from "../../assets/hemense.webp";

import { Profile } from "../Profile";
import "./teamsection.css";

export const TeamSection = () => {
  return (
    <div className="team__section">
      <h3 className="service__sec-title">Our Team</h3>
      <h1 className="service__title">Meet Our Professionals</h1>
      <div className="team__grid">
        <Profile
          name="shima aga"
          image={profile}
          title="founder &amp; CEO"
          facebook="shimaaga"
          linkedin="shimaaga"
          twitter="shimaaga"
        />
        <Profile
          name="joseph obasi"
          image={profile}
          title="chief operating officer"
          facebook="josephobasi"
          linkedin="josephobasi"
          twitter="obasi2020"
        />
        <Profile
          name="Jamil Abubakar"
          image={profile}
          title="chief analyst"
          facebook="jamilabubakar"
          linkedin="jamilabubakar"
          twitter="jamilabubakar"
        />
        <Profile
          name="lan hemense"
          image={hemense}
          title="web engineer"
          facebook="mrhilz"
          linkedin="hemense-lan"
          twitter="hemen_lan"
        />
      </div>
    </div>
  );
};

