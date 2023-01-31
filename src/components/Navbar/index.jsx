import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaBars } from 'react-icons/fa';

import { MobileMenu } from '../MobileMenu';

import logo from '../../assets/icon.webp';

const NavbarLink = (props) => {
  return (
    <li>
      <NavLink
        to={props.to}
        style={({ isActive }) =>
          isActive
            ? {
                color: 'var(--primary-color)',
                textDecoration: 'underline',
              }
            : undefined
        }>
        {props.name}
      </NavLink>
    </li>
  );
};

export const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className='navbar'>
        <div className='logo'>
          <img src={logo} alt='Logo' width={40} height={40} />
          <NavLink to='/'>BlueCaller</NavLink>
        </div>
        <ul className='nav__links hover:child:underline child:underline-offset-8'>
          <NavbarLink to='/' name='Home' />
          <NavbarLink to='/about' name='About' />
          <NavbarLink to='/services' name='Services' />
          <NavbarLink to='/projects' name='Projects' />
        </ul>
        <div className='search flex items-center gap-8'>
          <FaSearch />

          <NavLink
            to='/contact'
            className='bg-bl-800 p-3 px-8 transition duration-300 active:scale-90 active:shadow-lg hover:shadow-lg whitespace-nowrap rounded-xl text-white'>
            Contact
          </NavLink>
        </div>
        <FaBars className='menu__btn' onClick={() => setShow(true)} />
      </nav>
      <MobileMenu show={show} close={() => setShow(false)} />
    </>
  );
};
