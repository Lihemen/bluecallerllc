import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

import logo from '../../assets/icon.webp';

import './footer.css';

export const Footer = () => {
  return (
    <footer className='padding-x padding-y bg-bluecaller-900 text-white'>
      <div className='level__1'>
        <h3>LET'S WORK</h3>
        <div>
          <h1>Bring your ideas to life</h1>
          <div className='flex items-center gap-8'>
            <Link to='/services' className='text-white'>
              Get Started
            </Link>
            <Link
              to='/contact'
              className='flex items-center bg-bluecaller-600 text-white p-3 px-5 gap-4 rounded-xl'>
              <FaPhoneAlt /> Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className='level__2'>
        <div className='company'>
          <h3 translate='no'>
            <img src={logo} alt='LOGO' width={40} height={40} /> BlueCaller
          </h3>
          <p>
            We create websites and apps with the greatest of care and deliver
            only the best.
          </p>
        </div>

        <div className='links__grid'>
          <div className='col'>
            <h3>Contacts</h3>
            <ul className='text-bluecaller-900'>
              <li>
                <a href='mailto:info@bluecallertech.com'>
                  info@bluecallertech.com
                </a>
              </li>
              <li>
                <a href='tel:07011056442'>(+234) 701 833 6593</a>
              </li>
              <li>
                <a href='/#'>Zitel Plaza, P.O.W Mafemi Crescent, Utako</a>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h3>Quicklinks</h3>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h3>Support</h3>
            <ul>
              <li>
                <Link to='/company/faqs'>FAQs</Link>
              </li>
              <li>
                <Link to='/company/privacy-policy'>Policy</Link>
              </li>
              <li>
                <Link to='/company/careers'>Careers</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='level__3'>
        <p>Copyright &copy; {new Date().getFullYear()} BlueCaller</p>
        <ul className='flex gap-8 child:flex child:items-center child:rounded-full child:p-2 text-3xl'>
          <li>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noreferrer noopener'>
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/blue_caller/'
              target='_blank'
              rel='noreferrer noopener'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/bluecallertech'
              target='_blank'
              rel='noreferrer noopener'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href='https://api.whatsapp.com?send='
              target='_blank'
              rel='noreferrer noopener'>
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
