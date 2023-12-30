import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "./icon-180x180.png";

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

    window.addEventListener("scroll", changeNav);

    return () => window.removeEventListener("scroll", changeNav);
  }, [headerRef]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 pb-3 pt-6" ref={headerRef}>
      <Link
        to="/"
        className={`flex items-center gap-2 ${
          isNavScroll && "cursor-default opacity-0"
        } transition-opacity duration-300 ease-in-out`}
        onClick={(e) => {
          if (isNavScroll) e.preventDefault();
        }}
        aria-disabled={isNavScroll}
      >
        <img src={logo} alt="Engineering Club 4.0 logo" className="w-16" />
        <div className="text-2xl font-bold tracking-wide text-accent-900">
          Engineering 4.0
          <span className="mx-2 border-l-2 border-accent-900 font-normal"></span>
          <span className="font-thin">UWindsor</span>
        </div>
      </Link>

      <nav
        className={`${
          isNavScroll && "justify-around gap-0 rounded-lg  bg-[#ffffff80] shadow-2xl shadow-slate-400 backdrop-blur-2xl"
        } self-center px-6 py-5 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex justify-around gap-6">
          <li>
            <NavLink className={({ isActive }) => (isActive ? "font-bold text-accent-600" : "")} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "font-bold text-accent-600" : "")} to="/events">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "font-bold text-accent-600" : "")} to="/buddy">
              Buddy Program
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "font-bold text-accent-600" : "")} to="/about">
              About
            </NavLink>
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
