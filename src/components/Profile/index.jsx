import React from 'react';

import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Profile = ({
  name,
  image,
  title,
  facebook,
  linkedin,
  twitter,
}) => {
  return (
    <div className='flex flex-col bg-bl-50 p-8 rounded-xl gap-6'>
      <img src={image} alt={name} className='rounded-full' />
      <h3 className='capitalize'>{name}</h3>
      <span className='uppercase'>{title}</span>
      <ul className='flex justify-evenly child:text-xl child:flex child:rounded-full child:bg-bl-800 child:p-2 child:child:text-white'>
        <li>
          <a
            href={`https://facebook.com/${facebook}`}
            target='_blank'
            rel='noopener noreferrer'>
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href={`https://linkedin.com/in/${linkedin}`}
            target='_blank'
            rel='noopener noreferrer'>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href={`https://twitter.com/${twitter}`}
            target='_blank'
            rel='noopener noreferrer'>
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};
