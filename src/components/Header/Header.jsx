import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";

import logo from "./icon-180x180.png";

const Header = () => {
  const [isNavScroll, setIsNavScroll] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    if (!headerRef.current) return;

    const changeNav = () => {
      if (window.scrollY >= headerRef.current.clientHeight / 2) {
        setIsNavScroll(true);
      } else {
        setIsNavScroll(false);
      }
    };

    window.addEventListener("scroll", changeNav);

    return () => window.removeEventListener("scroll", changeNav);
  }, [headerRef]);

  return (
    <header
      className="sticky top-0 z-50 flex flex-col items-center justify-between px-6 pb-3 pt-6 md:flex-row md:pl-8 md:pr-3"
      ref={headerRef}
    >
      <div className="flex w-full items-center justify-between md:w-max">
        <div className="flex items-center gap-2">
          <Link to="/" aria-disabled={isNavScroll}>
            <img src={logo} alt="Engineering Club 4.0 logo" className="w-12 rounded-full lg:w-14" />
          </Link>
          <Link
            className={`text-nowrap font-bold tracking-wide text-accent-900 md:text-lg lg:text-xl ${
              isNavScroll && "pointer-events-none opacity-0"
            } transition-opacity duration-300 ease-in-out`}
          >
            Engineering 4.0
            <span className="hidden lg:inline">
              <span className="mx-2 border-l-2 border-accent-900 font-normal"></span>
              <span className="font-thin">UWindsor</span>
            </span>
          </Link>
        </div>
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="header-bg rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-accent-500 hover:text-white md:hidden"
        >
          {isNavOpen ? <HiX size="1.75rem" /> : <HiOutlineMenu size="1.75rem" />}
        </button>
      </div>
      <nav
        className={`${isNavScroll && "rounded-lg bg-[#ffffff80] shadow-2xl shadow-slate-400 backdrop-blur-2xl"} ${
          isNavOpen ? "right-4 top-20" : "-right-60 top-20"
        } header-bg fixed w-full max-w-[10.5rem] self-end px-5 py-5 text-center transition-all duration-300 ease-in-out md:static md:max-w-max md:self-center`}
      >
        <ul className="flex flex-col justify-around gap-3 md:flex-row md:gap-6 ">
          <li className="transition-colors duration-300 ease-in-out hover:text-accent-600">
            <NavLink className={({ isActive }) => (isActive ? "font-bold text-accent-600" : "")} to="/">
              Home
            </NavLink>
          </li>
          <li className="transition-colors duration-300 ease-in-out hover:text-accent-600">
            <NavLink className={({ isActive }) => (isActive ? "font-bold text-accent-600" : "")} to="/events">
              Events
            </NavLink>
          </li>
          <li className="transition-colors duration-300 ease-in-out hover:text-accent-600">
            <NavLink className={({ isActive }) => (isActive ? "font-bold text-accent-600" : "")} to="/buddy">
              Buddy Program
            </NavLink>
          </li>
          <li className="transition-colors duration-300 ease-in-out hover:text-accent-600">
            <NavLink className={({ isActive }) => (isActive ? "font-bold text-accent-600" : "")} to="/about">
              About
            </NavLink>
          </li>
          <li className="p-2.5 md:p-0">
            <Link to="/" className="btn-accent w-full px-6 text-sm md:w-min">
              Join
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
