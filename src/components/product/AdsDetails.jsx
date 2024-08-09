import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TbCategoryPlus } from "react-icons/tb";
import { MdMyLocation } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdUpdateDisabled } from "react-icons/md";
import { GiCrossMark } from "react-icons/gi";
import ProductImage from './ProductImage';
import { BsTelephonePlusFill } from "react-icons/bs";
import Comments from './Comments';
import { useSelector } from 'react-redux';
import ProductStore from '../ProductStore';
import { AllCategoryRequest } from '../APIRequest/APIRequest';

function AdsDetails({ProductDetails}) {
    
    const AllCategoryList = useSelector((state) => state.products.AllCategory);


    useEffect(() => {
        AllCategoryRequest();
     }, []);
    
    function revealPhoneNumber() {
        var phoneNum = document.getElementById('phoneNum');
        var phoneNumberContainer = document.getElementById('phoneNumberContainer');
        
        phoneNum.classList.remove('hidden');
        phoneNumberContainer.classList.add('hidden');
    }
  

    return (
        <div className='container mx-auto'>
            <div className='bg-white p-6 rounded-lg'>
                <div className='bg-purple-700  lg:flex justify-between items-center p-5 rounded-lg'>
                    <p className='px-2 rounded-2xl bg-amber-500'>Get Safe Browser in your Location!</p>
                    <div>
                        <span className='text-white'><NavLink to='/'>Home </NavLink>/<NavLink to='/all-ads'> All Ads </NavLink>/<NavLink to='/all-ads'> Current Ads</NavLink></span>
                    </div>
                </div>

                <div className='pt-5 lg:flex justify-between mb-2'>
                    <h1 className='text-lg flex items-center gap-2'><TbCategoryPlus  />Category: {ProductDetails.category['categoryName']}</h1>
                    <h1 className='text-lg flex items-center gap-2'><MdMyLocation />Location: {ProductDetails.locations['division']}</h1>
                    
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow lg:w-72" placeholder="Search" />
                        <NavLink className='bg-amber-500 p-3 rounded-lg'><FaSearch /></NavLink>
                    </label>
                </div>
                <hr/>

                <div className='grid lg:grid-cols-5 sm:grid-cols-1 mt-4 gap-4'>
                    <div className='sm:hidden lg:block md:hidden'>
                        <h2 className='font-semibold'>Devloper Details</h2>
                        <div className='card p-4 shadow-md'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1aAxmwETVWQptk4y4e8Wbv_E8FnTUEXyWr0qPKgeXA&s" className='w-20 rounded-lg my-4' alt='img' />
                            <h1 className='font-semibold text-lg'>Name: Mahi</h1>
                            <p className='text-slate-600'>This is Mobinul Islam Mahi. Mern Devloper</p>
                        </div>
                    </div>
                    <div className='lg:col-span-3 border-r-2 border-slate-2200 pr-3 sm:col-span-1'>
                        <h1 className='font-semibold text-lg'>Single result by Search: GigaTech Core i5 4th Gen.</h1>
                        <p className='text-sm text-slate-600'>Posted on {ProductDetails.createdAt}, {ProductDetails.locations['district']}, {ProductDetails.locations['division']} Division</p>
                        <div className='my-3'>
                            <ProductImage/>
                        </div>
                        <h1 className='font-semibold text-purple-600  text-2xl mb-2'>Price: {ProductDetails['price']} <span className='font-bold text-3xl'>৳</span></h1>


                        <span className='text-slate-600'>Product Name: <span className='text-slate-900 font-semibold'>{ProductDetails['title']} </span></span>

                        <div class='grid lg:grid-cols-2 sm:grid-cols-1 justify-center gap-y-2 lg:mx-11 pt-2'>
                            <div>
                                <span class='text-slate-600'>Brand: <span class='text-slate-900 font-semibold'>{ProductDetails['brand']['brandName']}</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Remark: <span class='text-slate-900 font-semibold'>{ProductDetails['remark']}</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Model: <span class='text-slate-900 font-semibold'>{ProductDetails['details']['model']}</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Color: <span class='text-slate-900 font-semibold'>{ProductDetails['details']['color']}</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Category: <span class='text-slate-900 font-semibold'>{ProductDetails.category['categoryName']}</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Sub-Category: <span class='text-slate-900 font-semibold'>{ProductDetails['subcategory']['subCategoryName']}</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Edition: <span class='text-slate-900 font-semibold'>old edition. (v.5.3)</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Division: <span class='text-slate-900 font-semibold'>{ProductDetails['locations']['division']}</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>District: <span class='text-slate-900 font-semibold'>{ProductDetails['locations']['district']}</span></span>
                            </div>
                        </div>
                            <div className='mt-5'>
                                <span class='text-slate-900 text-lg font-semibold'>Description</span>
                                <p class='text-slate-600 text-sm'>{ProductDetails['shortDes']}</p>
                            </div>
                            <div className='my-5'>
                                <span class='text-slate-900 text-lg font-semibold'>Features</span>
                                <p class='text-slate-600 text-sm'>{ProductDetails['details']['features']}
                                    </p>
                                <div className='mt-4'>
                                    <span class='text-slate-600'>age: <span class='text-slate-900 font-semibold'>{ProductDetails['details']['age']}</span></span><br/>
                                    <span class='text-slate-600'>Material: <span class='text-slate-900 font-semibold'>{ProductDetails['details']['material']}</span></span><br/>
                                    <span class='text-slate-600'>Size: <span class='text-slate-900 font-semibold'>{ProductDetails['details']['size']}</span></span><br/>
                                    <span class='text-slate-600'>Style: <span class='text-slate-900 font-semibold'>{ProductDetails['details']['style']}</span></span><br/>

                                </div>
                            </div>
                        <hr/>
                        <label htmlFor='my_modal_5' className='btn bg-amber-500 rounded-lg py-0 mt-3 hover:bg-amber-600 transition-all text-white border-0'><MdUpdateDisabled />Report Ads</label>

                        <input type='checkbox' id='my_modal_5' className='modal-toggle' />
                        <div className='modal' role='dialog'>
                            <div className='modal-box p-3 relative'>
                                
                                <label htmlFor="my_modal_5" className=" cursor-pointer absolute top-2 right-2"><GiCrossMark  className='w-6 h-6 hover:text-slate-700 transition-all text-slate-500' /></label>
                                
                                <p className='text-sm font-semibold mb-3'>Is there something wrong with this ad?</p>
                                <p className='text-slate-600 text-sm'>We're constantly working hard to assure that our ads meet high standards and we are very grateful for any kind of feedback from our users.</p>
                                <div className='my-5'>
                                    <label htmlFor='reason'>Reason</label>
                                    <input type='text' id='reason' placeholder='Reason' className='w-full rounded-md px-3 border-2 border-slate-400 my-3' />

                                    <label htmlFor='msg'>Message</label>
                                    <textarea id='msg' placeholder='Your Message' className='w-full rounded-md my-3 px-3 border-2 border-slate-400' rows='3'></textarea>

                                    <div className='modal-action'>
                                        <NavLink className='btn w-full border-0 rounded-md bg-purple-700 hover:bg-purple-800 transition-all text-slate-200'>Send</NavLink>
                                    </div>

                                </div>
                              
                            </div>
                        </div>


                    </div>
                    <div className='col-span-1'>
                        <div className='border-2  py-3 rounded-lg'>
                            <div className='px-2 pb-2 border-b-2'>
                                <h1 className='text-slate-500'>Sales by: <span className='text-slate-900 font-semibold'>{ProductDetails['user']['firstName']} {ProductDetails['user']['lastName']}</span></h1>
                                <p className='text-slate-500'>Member since:- <b>{ProductDetails['user']['createdAt']}</b></p>
                            </div>

                            <div className="px-2 py-3 border-b-2 flex items-start gap-3 cursor-pointer" >

                                <div className='text-white bg-purple-600 flex justify-center p-2 rounded-3xl w-9'> 
                                    <BsTelephonePlusFill  />
                                </div>
                                <div id="phoneNumberContainer" onClick={revealPhoneNumber} className='block'>
                                    <p className='text-slate-700 text-lg text-left font-semibold' >0185XXXXXXX</p>
                                    <p className='text-slate-500 text-xs'>Click to show Phone Number</p>
                                </div>
                                <div id="phoneNum" className='hidden'>
                                    <p className='text-slate-700 text-lg font-semibold'>{ProductDetails['user']['mobile']}</p>
                                </div>
                            </div>

                            <div className="px-2 py-3">
                                <p className='text-slate-700 text-lg font-semibold px-2 pt-1'>All Categories</p>

                                {AllCategoryList && AllCategoryList.length > 0 ? (
                                    <div className='text-slate-600 text-sm px-2'>
                                        {AllCategoryList.map((item, i) => (
                                                <NavLink key={i} to={`/by-category/${item._id}`} className='block'>{item.categoryName} ({item.productCount})</NavLink>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No category yet</p>
                                )}
                            
                            </div>
                            <div className="px-2 py-3 border-t-2">
                                <span className='flex items-center gap-3'>
                                    <img src='https://i.postimg.cc/C1GcmJHL/safety.jpg' className='w-6'/>
                                    <p className='font-semibold text-lg'>Be careful: avoid online scams</p>
                                </span>
                                <ul className='list-disc pl-3' >
                                    <li className='list-item mb-3'>Never share bank card details or OTP, always verify the product before making payment. Ponno Sheba does not provide delivery service. Always be alert.</li>
                                    <Link to={'/safety-tips'} className='mt-4 text-indigo-600 hover:underline'>See all safety tips</Link>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>


            <div className=''>
                <h1 className='text-2xl font-semibold'>Comments</h1><hr/>
                <Comments/>
            </div>
            </div>
            
        </div>
    );
}

export default AdsDetails;