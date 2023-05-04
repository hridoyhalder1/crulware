import React from 'react';
import { Link } from 'react-router-dom';
import  './Navbar.css';

const Navbar = () => {
    const menuItems = <>
        <li tabIndex={0} >
            <a>
                Web Theme and Template
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-white z-[1] text-black">
                <li><a>HTML</a></li>
                <li><a>Bootstrap</a></li>
                <li><a>Tailwind</a></li>
                <li><a>Javascript</a></li>
                <li><a>Laravel</a></li>
                <li><a>Wordpress</a></li>
            </ul>
        </li>
        <li tabIndex={0}>
            <a>
                UI Material Kit
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-white z-[1] text-black">
                <li><a>Bootstrap</a></li>
                <li><a>Tailwind</a></li>
                <li><a>Javascript</a></li>
                <li><a>WordPress Widget</a></li>
            </ul>
        </li>
        <li tabIndex={0}>
            <a>
                WordPress
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-white z-[1] text-black">
                <li><a>WordPress Theme</a></li>
                <li><a>WordPress Plugin</a></li>
                <li><a>WordPress Widget</a></li>
                <li><a>WordPress Template</a></li>
            </ul>
        </li>
        <li tabIndex={0}>
            <a>
                Bootstrap
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-white z-[1] text-black">
                <li><a>Admin Dashboard</a></li>
                <li><a>Template</a></li>
                <li><a>Bootstrap UI Kit</a></li>
            </ul>
        </li>
        <li tabIndex={0}>
            <a>
                Tailwind
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-white z-[1] text-black">
                <li><a>Admin Dashboard</a></li>
                <li><a>Template</a></li>
                <li><a>Tailwind UI Kit</a></li>
            </ul>
        </li>
        <li tabIndex={0}>
            <a>
                Bundles
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-white z-[1] text-black ">
                <li><a>WordPress Widget Bundles</a></li>
                <li><a>BootStrap Bundles</a></li>
                <li><a>Tailwind Bundles</a></li>
                <li><a>Laravel Bundles</a></li>
                <li><a>HTML Bundles</a></li>
            </ul>
        </li>
        <li><a>Signup</a></li>
    </>
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className="navbar text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 ">
                        {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Curl Ware</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;