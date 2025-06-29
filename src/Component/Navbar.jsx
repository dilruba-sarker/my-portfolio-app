import React from 'react';
import logo from "../assets/logo.png";
import { MdDownloadForOffline } from 'react-icons/md';
import { NavLink } from 'react-router';

const Navbar = () => {
  const links = <>
    <li>
      <NavLink
       
        className="relative group font-medium text-md px-3 py-2 rounded overflow-hidden text-black"
      >
        <span className="absolute inset-0 scale-x-0 origin-center transition-transform duration-300 bg-black group-hover:scale-x-100 z-0 rounded"></span>
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
          HOME
        </span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/aboutus"
       
        className="relative group font-medium text-md px-3 py-2 rounded overflow-hidden text-black"
      >
        <span className="absolute inset-0 scale-x-0 origin-center transition-transform duration-300 bg-black group-hover:scale-x-100 z-0 rounded"></span>
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
          ABOUT US
        </span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/contract-me"
        className="relative group font-medium text-md px-3 py-2 rounded overflow-hidden text-black"
      >
        <span className="absolute inset-0 scale-x-0 origin-center transition-transform duration-300 bg-black group-hover:scale-x-100 z-0 rounded"></span>
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
          CONTACT ME
        </span>
      </NavLink>
    </li>
  </>;

  return (
    <div className="navbar bg-base-100 shadow-sm  fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <NavLink  className="flex items-center">
          <img className='w-18 h-16' src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a 
          href="/resume.pdf" 
          download="YourName_Resume.pdf"
          className="btn"
        >
          Resume
          <span className='text-2xl'><MdDownloadForOffline /></span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;