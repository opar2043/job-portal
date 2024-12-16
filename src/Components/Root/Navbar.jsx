import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './Authprovider';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li><NavLink to={'/'} className="hover:text-pink-500 transition-all">Home</NavLink></li>
     
      <li><NavLink to={'/myapplication'} className="hover:text-pink-500 transition-all">My Application</NavLink></li>
      <li><NavLink to={'/addjob'} className="hover:text-pink-500 transition-all">Add Job</NavLink></li>
      {user && (
        <li><NavLink to={'/mypostedjobs'} className="hover:text-pink-500 transition-all">My Posted Jobs</NavLink></li>
      )}
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 shadow-lg text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-purple-700 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
            {links}
          </ul>
        </div>
        <h2 className="text-3xl font-extrabold tracking-wide ml-7">
          Job<span className="text-pink-300">Portal</span>
        </h2>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 px-1 text-lg font-semibold">
          {links}
        </ul>
      </div>

      <div className="navbar-end flex items-center">
        {user ? (
          <div className="flex items-center gap-4">
            <h2 className="font-medium text-lg">{user.displayName}</h2>
            <button
              className="btn btn-warning hover:bg-yellow-600 transition-all"
              onClick={() => signOutUser()}
            >
              Log Out
            </button>
          </div>
        ) : (
          <NavLink to={'/login'}>
            <button className="btn btn-secondary bg-pink-600 hover:bg-pink-700 transition-all">
              Sign In
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
