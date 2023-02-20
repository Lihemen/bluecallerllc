import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';
import { Slide } from 'react-awesome-reveal';
import './contactdetails.css';

export const ContactDetails = () => {
  return (
    <section className='contact__details'>
      <Slide direction='up' cascade triggerOnce>
        <div className='col'>
          <span className='icon'>
            <FaMapMarkerAlt />
          </span>
          <h3>Address</h3>
          <p>
            Plot A212, P.O.W Mafemi Crescent, opp Daily Trust, Utako Abuja
            900108
          </p>
        </div>
        <div className='col'>
          <span className='icon'>
            <FaPhoneAlt />
          </span>
          <h3>Phone</h3>
          <p>+234 701 833 6593</p>
          <p>+234 701 105 6442</p>
        </div>
        <div className='col'>
          <span className='icon'>
            <FaEnvelopeOpen />
          </span>
          <h3>Email</h3>
          <p>info@bluecallertech.com</p>
          <p>support@bluecallertech.com</p>
        </div>
      </Slide>
    </section>
  );
};
