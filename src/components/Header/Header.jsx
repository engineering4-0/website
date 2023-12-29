import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from './icon-180x180.png';

const Header = () => {
  const [isNavScroll, setIsNavScroll] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    if (!headerRef.current) return;

    const changeNav = () => {
      if (window.scrollY >= headerRef.current.clientHeight) {
        setIsNavScroll(true);
      } else {
        setIsNavScroll(false);
      }
    };

    window.addEventListener('scroll', changeNav);

    return () => window.removeEventListener('scroll', changeNav);
  }, [headerRef]);

  return (
    <header
      className="flex justify-between items-center px-8 pt-6 pb-2.5 sticky top-0 z-50"
      ref={headerRef}
    >
      <Link
        to="/"
        className={`flex items-center gap-2 ${
          isNavScroll && 'opacity-0 cursor-default'
        } transition-opacity duration-300 ease-in-out`}
        onClick={(e) => {
          if (isNavScroll) e.preventDefault();
        }}
        aria-disabled={isNavScroll}
      >
        <img src={logo} alt="Engineering Club 4.0 logo" className="w-16" />
        <div className="font-bold text-2xl text-accent-900 tracking-wide">
          Engineering 4.0
          <span className="font-normal border-accent-900 border-l-2 mx-2"></span>
          <span className="font-thin">UWindsor</span>
        </div>
      </Link>

      <nav
        className={`${
          isNavScroll &&
          'shadow-2xl shadow-slate-400 rounded-lg  justify-around gap-0 backdrop-blur-2xl bg-[#ffffff80]'
        } transition-all duration-300 ease-in-out self-center p-4`}
      >
        <ul className="flex gap-8 justify-evenly">
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
