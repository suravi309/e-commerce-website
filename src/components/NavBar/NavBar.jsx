import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import login from "../../assets/icon.png"
import logo from "../../assets/logoo.png"

const NavBar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listedBooks">Listed Books</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">Boi Poka</a> */}
                <div className="flex py-3">

    <img className="w-10" src={logo} alt=""/>
    <h1 className="text-2xl mt-3 font-poppins font-bold">PenCub</h1>
    </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
            <div className="login">
       <div className="flex gap-3">
       <img className="w-10 pt-4" src={login} alt=""/>
       <Link to="/auth/login" className="btn btn-outline mt-3">login</Link>
       </div> 
       

      </div>
            </div>
        </div>
    );
};

export default NavBar;


