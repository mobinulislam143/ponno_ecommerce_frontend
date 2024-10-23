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
                <div className="header bg-bg_primary text-white py-3 shadow-lg">
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
                            src="https://i.postimg.cc/sXjsdn7s/ponnosheba1-ai-removebg-preview.png"
                            className="w-20 mx-auto lg:mx-0 cursor-pointer"
                            alt="mainLogo"
                            />
                        </NavLink>
                        </div>
                        {/* Desktop Buttons */}
                        <div className="hidden lg:flex flex-grow items-center justify-end gap-3">
                        <NavLink
                            to="/all-ads"
                            className="btn text-lg bg-bg_primary focus:bg-bg_secondary px-4 py-2 text-white rounded-full hover:bg-bg_primary_hover hover:text-white transition-all flex items-center border-0 gap-2"
                        >
                            <MdProductionQuantityLimits className="text-xl" /> All Ads
                        </NavLink>
                        <NavLink
                            to="/post-ads"
                            className="btn text-lg bg-bg_primary focus:bg-bg_secondary px-4 py-2 text-white rounded-full hover:bg-bg_primary_hover hover:text-white transition-all flex items-center border-0 gap-2"
                        >
                            <BsFillSignpostFill className="text-xl" /> Post your Ad
                        </NavLink>
                        <NavLink
                            to={getToken() ? "/users/user-profile" : "/registration"}
                            className="btn text-lg bg-bg_primary focus:bg-bg_secondary px-4 py-2 text-white rounded-full hover:bg-bg_primary_hover hover:text-white transition-all flex items-center border-0 gap-2"
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
                            className="btn text-lg bg-bg_primary px-4 py-2  rounded-full hover:bg-bg_primary_hover text-white transition-all flex items-center border-0 gap-2"
                        >
                            <MdProductionQuantityLimits className="text-xl" /> All Ads
                        </NavLink>
                        <NavLink
                            to="/post-ads"
                            className="btn text-lg bg-bg_primary px-4 py-2  rounded-full hover:bg-bg_primary_hover text-white transition-all flex items-center border-0 gap-2"
                        >
                            <BsFillSignpostFill className="text-xl" /> Post your Ad
                        </NavLink>
                        <NavLink
                            to={getToken() ? "/user-profile" : "/registration"}
                            className="btn text-lg bg-bg_primary px-4 py-2  rounded-full hover:bg-bg_primary_hover text-white transition-all flex items-center border-0 gap-2"
                        >
                            <RiAccountCircleFill className="text-xl" /> My Account
                        </NavLink>
                        </div>
                    )}
                    </div>

                <div className="content mt-[60px]">
                    {props.children}
                </div>

                <div className="footer bg-bg_primary text-white pt-10 pb-12">
                    <div className="container mx-auto grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-10">
                        <div className="text-center lg:text-left md:text-left mx-auto w-72">
                            <img  src="https://i.postimg.cc/qRvVZNH7/fdfdfs.png" alt="logo2" className="mb-3 w-28 mx-auto" />
                            <p>This website is built with ReactJS, ExpressJS, NodeJS, MongoDB & Tailwind CSS. For any questions, visit <a href="https://mobinulislam.epizy.com" className="underline">https://mahi-lac.vercel.app</a> or email: dev.mahi2628@gmail.com</p>
                        </div>
                        <div className="text-center lg:text-left md:text-left mx-auto">
                            <h2 className="font-bold text-xl mb-3">Important Links</h2>
                            <NavLink to="/" className="block py-1 hover:text-bg_secondary hover:ml-1 transition-all">Home</NavLink>
                            <NavLink to="/all-ads" className="block py-1 hover:text-bg_secondary hover:ml-1 transition-all">All Ads</NavLink>
                            <NavLink to="/post-ads" className="block py-1 hover:text-bg_secondary hover:ml-1 transition-all">Post your Ads</NavLink>
                            <NavLink to="/profile" className="block py-1 hover:text-bg_secondary hover:ml-1 transition-all">My Account</NavLink>
                        </div>
                        <div className="text-center lg:text-left md:text-left mx-auto">
                            <h2 className="font-bold text-xl mb-3">Ponno Sheba</h2>
                            <NavLink to="/safety-tips" className="block py-1 hover:text-bg_secondary hover:ml-1 transition-all">Safety Tips</NavLink>
                            <NavLink to="/terms-and-condition" className="block py-1 hover:text-bg_secondary hover:ml-1 transition-all">Terms and Conditions</NavLink>
                            <NavLink to="/contact" className="block py-1 hover:text-bg_secondary hover:ml-1 transition-all">Contact Us</NavLink>
                        </div>
                        <div className="text-center lg:text-left md:text-left mx-auto">
                            <h2 className="font-bold text-xl mb-3">Newsletter</h2>
                            <p>Sign up and receive the latest tips via email.</p>
                            <input type="email" placeholder="Your email" className="w-full bg-white h-11 px-3 text-bg_primary rounded-md mt-2 outline-none foucus:outline-none border focus:border-bg_secondary focus:shadow-lg focus:shadow-bg_secondary" />
                            <button className="btn bg-bg_secondary border-none text-white px-5 py-2 mt-4 rounded-lg hover:bg-bg_secondary_hover transition-all">Subscribe</button>
                        </div>
                        <div className='text-center lg:text-left md:text-left mx-auto'>
                            <p className="text-2xl text-center">We accept</p>
                            <img className='w-96' src="banking.png" alt='banking'/>
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
