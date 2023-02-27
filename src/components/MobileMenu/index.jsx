import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import './mobilemenu.css';

export const MobileMenu = ({ show, close }) => {
  function MobileLink({ to, label }) {
    return (
      <li>
        <NavLink to={to} onClick={close}>
          {label}{' '}
        </NavLink>
      </li>
    );
  }

  return (
    <aside
      className={`mobile__menu ${show ? 'active' : undefined}`}
      onClick={close}>
      <nav onClick={(e) => e.stopPropagation()}>
        <FaTimes id='close' onClick={close} />
        <ul>
          <MobileLink to='/' label='Home' />
          <MobileLink to='/about' label='About Us' />
          <MobileLink to='/services' label='Our Services' />
          <MobileLink to='/contact' label='Contact Us' />
        </ul>
      </nav>
    </aside>
  );
};
