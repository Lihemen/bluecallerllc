import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";

import "./contactdetails.css";

export const ContactDetails = () => {
  return (
    <section className="contact__details">
      <div className="col">
        <FaMapMarkerAlt />
        <h3>Address</h3>
        <p>Zitel Plaza P.O.W Mafemi Crescent, opp Daily Trust Utako</p>
      </div>
      <div className="col">
        <FaPhoneAlt />
        <h3>Phone</h3>
        <p>+234 701 105 6442</p>
        <p>+234 701 105 6442</p>
      </div>
      <div className="col">
        <FaEnvelopeOpen />
        <h3>Email</h3>
        <p>info@bluecallerllc.com</p>
        <p>bluecallerllc@gmail.com</p>
      </div>
    </section>
  );
};
