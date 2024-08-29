import React, { useState, useEffect } from 'react';
import { BsFillSignpostFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import Copyright from './Copyright';
import { getToken } from '../helper/FormHelper';
import './masterlayout.css';
import ScrollToTop from './ScrollTop';


function MasterLayout(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className='relative'>
                <ScrollToTop/>
                <div className="header bg-pink-700 text-white py-3 shadow-lg">
                    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                        <div className="flex items-center gap-2 text-sm">
                            <HiMail className="text-lg" />
                            <p>mobinulislaminfo@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-2 lg:mt-0">
                            <FaLocationDot className="text-lg" />
                            <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                        </div>
                    </div>
                </div>

            
                <div className="header-sec duration-500 transition-all mt-0 w-full bg-white shadow-lg sticky top-0 z-50 ">
                    <div className="container mx-auto flex items-center justify-between py-2">
                        {/* Logo */}
                        <div className="text-center lg:text-left">
                        <NavLink to="/">
                            <img
                            src="https://i.postimg.cc/ydjFDGy9/logo1.png"
                            className="w-20 mx-auto lg:mx-0 cursor-pointer"
                            alt="mainLogo"
                            />
                        </NavLink>
                        </div>
                        {/* Desktop Buttons */}
                        <div className="hidden lg:flex flex-grow items-center justify-end gap-3">
                        <NavLink
                            to="/all-ads"
                            className="btn text-lg bg-amber-500 px-4 py-2 text-black rounded-full hover:bg-pink-700 hover:text-white transition-all flex items-center border-0 gap-2"
                        >
                            <MdProductionQuantityLimits className="text-xl" /> All Ads
                        </NavLink>
                        <NavLink
                            to="/post-ads"
                            className="btn text-lg bg-amber-500 px-4 py-2 text-black rounded-full hover:bg-pink-700 hover:text-white transition-all flex items-center border-0 gap-2"
                        >
                            <BsFillSignpostFill className="text-xl" /> Post your Ad
                        </NavLink>
                        <NavLink
                            to={getToken() ? "/user-profile" : "/registration"}
                            className="btn text-lg bg-amber-500 px-4 py-2 text-black rounded-full hover:bg-pink-700 hover:text-white transition-all flex items-center border-0 gap-2"
                        >
                            <RiAccountCircleFill className="text-xl" /> My Account
                        </NavLink>
                        </div>
                        {/* Mobile Menu Toggle */}
                        <button
                        className="lg:hidden text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                        >
                        <div className="p-2 rounded-lg hover:bg-gray-300 transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                            </div> 
                        </button>
                    </div>
                    {/* Mobile Buttons */}
                    {menuOpen && (
                        <div className={`lg:hidden flex flex-col items-center gap-3 mt-2 ease-in-out duration-500 `}>
                        <NavLink
                            to="/all-ads"
                            className="btn text-lg bg-amber-500 px-4 py-2 text-black rounded-full hover:bg-pink-700 hover:text-white transition-all flex items-center border-0 gap-2"
                        >
                            <MdProductionQuantityLimits className="text-xl" /> All Ads
                        </NavLink>
                        <NavLink
                            to="/post-ads"
                            className="btn text-lg bg-amber-500 px-4 py-2 text-black rounded-full hover:bg-pink-700 hover:text-white transition-all flex items-center border-0 gap-2"
                        >
                            <BsFillSignpostFill className="text-xl" /> Post your Ad
                        </NavLink>
                        <NavLink
                            to={getToken() ? "/user-profile" : "/registration"}
                            className="btn text-lg bg-amber-500 px-4 py-2 text-black rounded-full hover:bg-pink-700 hover:text-white transition-all flex items-center border-0 gap-2"
                        >
                            <RiAccountCircleFill className="text-xl" /> My Account
                        </NavLink>
                        </div>
                    )}
                    </div>

                <div className="content mt-[60px]">
                    {props.children}
                </div>

                <div className="footer bg-purple-800 text-white pt-10 pb-12">
                    <div className="container mx-auto grid lg:grid-cols-4 gap-10">
                        <div>
                            <img src="https://i.postimg.cc/0QVwkw90/logo2.png" alt="logo2" className="mb-3" />
                            <p>This website is built with ReactJS, ExpressJS, NodeJS, MongoDB & Tailwind CSS. For any questions, visit <a href="https://mobinulislam.epizy.com" className="underline">https://mobinulislam.epizy.com</a> or email: mobinulislammahi@gmail.com</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-xl mb-3">Important Links</h2>
                            <NavLink to="/" className="block py-1 hover:text-amber-500 transition-all">Home</NavLink>
                            <NavLink to="/all-ads" className="block py-1 hover:text-amber-500 transition-all">All Ads</NavLink>
                            <NavLink to="/post-ads" className="block py-1 hover:text-amber-500 transition-all">Post your Ads</NavLink>
                            <NavLink to="/profile" className="block py-1 hover:text-amber-500 transition-all">My Account</NavLink>
                        </div>
                        <div>
                            <h2 className="font-bold text-xl mb-3">Ponno Sheba</h2>
                            <NavLink to="/safety-tips" className="block py-1 hover:text-amber-500 transition-all">Safety Tips</NavLink>
                            <NavLink to="/terms-and-condition" className="block py-1 hover:text-amber-500 transition-all">Terms and Conditions</NavLink>
                            <NavLink to="/contact" className="block py-1 hover:text-amber-500 transition-all">Contact Us</NavLink>
                        </div>
                        <div>
                            <h2 className="font-bold text-xl mb-3">Newsletter</h2>
                            <p>Sign up and receive the latest tips via email.</p>
                            <input type="email" placeholder="Your email" className="w-full h-11 px-3 text-purple-800 rounded-md mt-2" />
                            <button className="btn bg-pink-700 text-white px-5 py-2 mt-4 rounded-lg hover:bg-amber-500 transition-all">Subscribe</button>
                        </div>
                    </div>
                    <hr className="mt-10 border-gray-500" />
                </div>
                <Copyright />
            </div>
           
        </>
    );
}

export default MasterLayout;
