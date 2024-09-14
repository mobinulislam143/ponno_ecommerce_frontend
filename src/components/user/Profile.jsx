import React, { Fragment, useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Profile.css'
import { FiSettings } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { ImProfile } from "react-icons/im";

function Profile(props) {
  const [open, setOpen] = useState(true)

  return (
      <Fragment> 
         
         <div className='flex'>
              <div className={`h-screen ${open ? "w-3/12":"w-20"} p-3  bg-white duration-300 border-r-2`}>
                  <div className="space-y-3">
                      <div className="flex items-center justify-between">
                      <span class={`ml-2 text-2xl tracking-wide truncate ${!open && "hidden"} duration-300 font-bold`}><span className='text-bg_primary'>Ponno</span> <span className='text-bg_secondary'>Sheba</span> </span>

                          <button className="p-2">
                             
                              <AiOutlineMenuFold onClick={() =>setOpen(!open)} className={`p-1 text-4xl text-black fill-current hover:bg-slate-300  rounded-md duration-500  ${!open && 'rotate-180'}`} />
                             
                          </button>
                      </div>
              
                      <div className="flex-1">
                          <ul className="pt-2 pb-4 space-y-1 text-sm">
                              
                          
                              <li>
                                  <Link to={'/user-profile'} class="relative flex flex-row items-center h-11 focus:bg-amber-100 focus:border-amber-500 hover:bg-amber-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-amber-500 pr-6">
                                      <span class="inline-flex justify-center items-center ml-4 text-lg">
                                        <ImProfile />
                                      </span>
                                      <span class="ml-2 text-sm tracking-wide truncate">My Profile</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to={'/user-ads'} class="relative flex flex-row items-center h-11 focus:bg-amber-100 focus:border-amber-500 hover:bg-amber-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-amber-500 pr-6">
                                      <span class="inline-flex justify-center items-center ml-4 text-lg">
                                        <MdProductionQuantityLimits />
                                      </span>
                                      <span class="ml-2 text-sm tracking-wide truncate">My Ads</span>
                                  </Link>
                                  </li>
                                  <li>
                                  <Link to={'/edit-profile'} class="relative flex flex-row items-center h-11 focus:bg-amber-100 focus:border-amber-500 hover:bg-amber-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-amber-500 pr-6">
                                      <span class="inline-flex justify-center items-center ml-4 text-lg">
                                        <FaEdit />
                                      </span>
                                      <span class="ml-2 text-sm tracking-wide truncate">Edit Profile</span>
                                  </Link>
                                  </li>
                                  <li>
                                  <Link to={'/settings'} class="relative flex flex-row items-center h-11 focus:bg-amber-100 focus:border-amber-500 hover:bg-amber-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-amber-500 pr-6">
                                      <span class="inline-flex justify-center items-center ml-4 text-lg">
                                      <FiSettings />
                                      </span>
                                      <span class="ml-2 text-sm tracking-wide truncate">Settings</span>
                                     
                                  </Link>
                                  </li>
                                  
                                 
                                 
                              
                          </ul>
                      </div>
                  </div>
                      
              <Toaster position='top-right' />
              </div>
              <div  className="content p-5 w-full">
                    {props.children}
                  </div>
         </div>
      </Fragment>
  );
}

export default Profile
