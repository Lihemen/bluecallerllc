import React from 'react';
import { Link } from 'react-router-dom';

import iphonemockup from '../../assets/iphonemockup.webp';
import macbookmockup from '../../assets/macbookmockup.webp';

import './topservices.css';

export const TopServices = () => {
  return (
    <section className='padding-x padding-y'>
      <div className='top__services'>
        <div className='col'>
          <div className='col__text pr-3r'>
            <h3 className='font-serif'>App Design</h3>
            <h1>We Always Create Innovation For You</h1>
            <p>
              Develop a unique and functional app that is user-friendly and easy
              to use.
            </p>
            <Link
              to='/services/app-development'
              className='active:shadow-lg active:scale-90 bg-bluecaller-400 transition duration-200 !py-4 hover:bg-bluecaller-600 '>
              Learn More
            </Link>
          </div>
          <div className='col__image !bg-bluecaller-50 max-h-[600px] '>
            <img src={iphonemockup} alt='iphone 13 mockup' />
          </div>
        </div>
        <div className='col'>
          <div className='col__image !bg-bluecaller-50 max-h-[600px] '>
            <img src={macbookmockup} alt='macbook pro mockup' />
          </div>
          <div className='col__text pl-3r'>
            <h3 className='font-serif'>Web Design</h3>
            <h1>Just A Perfect Experience of Tech</h1>
            <p>
              Build a website that is responsive, fast, perfomant and generates
              traffic.
            </p>
            <Link
              to='/services/web-development'
              className='active:shadow-lg active:scale-90 bg-bluecaller-400 transition duration-200 !py-4 hover:bg-bluecaller-600 '>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
