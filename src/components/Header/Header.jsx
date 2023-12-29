import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from './icon-180x180.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 pt-6 pb-2.5 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Engineering Club 4.0 logo" className="w-16" />
        <caption className="font-bold text-2xl text-accent-900 tracking-wide">
          Engineering Club 4.0
        </caption>
      </Link>

      <nav>
        <ul className="flex gap-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/buddy">Buddy Program</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <Link to="/" className="btn-accent">
              Become a Member
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
