import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css'

const Navbar = () => {
  const links = <div className='flex items-center gap-3 text-gray-300 justify-center '>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/explore">Explore</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    <li><NavLink to="/posts">Post</NavLink></li>
    <li><NavLink to="/users">Users</NavLink></li>
  </div>
  return (
    <div>
      <div className="navbar fixed top-0 z-30 right-0 bg-blue-950 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold text-white md:text-3xl">TRAVEL WEB</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;