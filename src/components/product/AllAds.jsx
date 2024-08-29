import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TbCategoryPlus } from "react-icons/tb";
import { MdMyLocation } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import ProductSlider from './ProductSlider';
import './AllAds.css';
import { AllBrandRequest, AllCategoryRequest, AllDivisionRequest, AllSubCategoryRequest, AllProduct } from '../APIRequest/APIRequest';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';



function AllAds({ products }) {

    const scrollAnimationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };


    const [subCategories, setSubCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                await AllCategoryRequest()
                await AllBrandRequest()
                await AllDivisionRequest()
                await AllProduct()
            }catch(e){
                console.error(e.toString());
            }
        }
        fetchData()
    
     },[])

    const AllCategoryList = useSelector((state) => state.products.AllCategory);
    const AllBrandList = useSelector((state) => state.products.AllBrand);
    const AllDivisionList = useSelector((state) => state.products.AllDivision);

    const handleCategoryClick = async (categoryId) => {
        setActiveCategory(categoryId);
        try {
            const subCategoriesData = await AllSubCategoryRequest(categoryId);
            setSubCategories(subCategoriesData);
        } catch (e) {
            console.error(e.toString());
        }
    };

    return (

        <div className="container mx-auto">
            <div className='bg-white p-6 rounded-lg'>
                {/* <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={scrollAnimationVariants}
                    viewport={{ once: false, amount: 0.2 }}
                > */}
                <div className='bg-purple-700 lg:flex justify-between items-center p-5 rounded-lg'>

                    <p className='px-2 rounded-2xl bg-amber-500 text-black'>Get Safe Browser in your Location!</p>
                    <div>
                        <span className='text-white'>
                            <NavLink to='/'>Home </NavLink>/
                            <NavLink to='/all-ads'> All Ads </NavLink>/
                            <NavLink to='/all-ads'> Current Ads</NavLink>
                        </span>
                    </div>
                </div>
                {/* </motion.div> */}

                {/* <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={scrollAnimationVariants}
                    viewport={{ once: false, amount: 0.2 }}
                > */}
                <div className='pt-5 lg:flex justify-between mb-2'>
                    <h1 className='text-lg flex items-center gap-2 text-black'><TbCategoryPlus />Category: All</h1>
                    <h1 className='text-lg flex items-center gap-2 text-black'><MdMyLocation />Location: Cumilla</h1>
                    
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow lg:w-72" placeholder="Search" />
                        <NavLink className='bg-amber-500 p-3 rounded-lg'><FaSearch /></NavLink>
                    </label>
                </div>
                <hr/>
                {/* </motion.div> */}

                <div className='grid lg:grid-cols-4 sm:grid-cols-1 mt-4 gap-4 '>
                    <div className='border-r-2 px-2'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={scrollAnimationVariants}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                        <div className='flex items-center justify-between my-2'>
                            <p className="text-sm text-slate-600">Sort result by...</p>
                            <NavLink to={'/all-ads'} className='btn'>Clear Filter</NavLink>
                        </div>
                        
                        <div tabIndex={0} className="collapse collapse-arrow hover:bg-slate-100 transition-all my-4">
                            <input type='checkbox' />
                            <div className="collapse-title bg-cyan-400 text-white font-semibold ">Category</div>
                            
                            <div className="collapse-content border-2"> 
                                <ul className="lg:ml-3">
                                    {AllCategoryList !== null ? (
                                            AllCategoryList.map((item, i) => {
                                                return (
                                                <li key={i} className="focus:text-purple-600 hover:text-purple-600 list-decimal ">
                                                    {/* <div className="collapse collapse-arrow"> */}
                                                        {/* <input type="checkbox" id="nested-collapse-category" /> */}
                                                        <label htmlFor="nested-collapse-brand" className="collapse-title collapse-arrow cursor-pointer ">{item.categoryName}
                                                        </label>
                                                    
                                                        {/* <div className="collapse-content">
                                                            <ul className="lg:ml-3">
                                                                <li className="hover:text-pink-600">
                                                                    <Link to="#">Mymensingh</Link>
                                                                </li>
                                                                <li className="hover:text-pink-600">
                                                                    <Link to="#">Gazipur</Link>
                                                                </li>
                                                            
                                                            </ul>
                                                        </div> */}
                                                    {/* </div> */}
                                                </li>
                                                
                                                );
                                            })
                                    ) : (
                                        <p>no category</p>
                                    )}
                                   
                                </ul>
                            </div>
                        </div>
                   

                        <div>
                            <h1 className='text-slate-600 text-lg font-semibold'>Price Range</h1>
                            <label className='text-slate-600'>Minimum Price 500</label>
                            <input min={0} max={500000} step={500} className="range range-info" type='range' />
                            <label className='text-slate-600'>Maximum Price 500</label>
                            <input min={0} max={500000} step={500} className="range range-info" type='range' />
                        </div>
                        <hr/>
                        </motion.div>


                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={scrollAnimationVariants}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                        <div tabIndex={0} className="collapse collapse-arrow hover:bg-slate-100 transition-all my-4">
                            <input type='checkbox' />
                            <div className="collapse-title bg-cyan-400 text-white font-semibold ">Brand</div>
                            
                            <div className="collapse-content border-2"> 
                                <ul className="lg:ml-3">
                                    {AllBrandList !== null ? (
                                            AllBrandList.map((item, i) => {
                                                return (
                                                <li key={i} className="focus:text-purple-600 hover:text-purple-600 list-decimal ">
                                                    {/* <div className="collapse collapse-arrow"> */}
                                                        {/* <input type="checkbox" id="nested-collapse-category" /> */}
                                                        <label htmlFor="nested-collapse-brand" className="collapse-title collapse-arrow cursor-pointer ">{item.brandName}
                                                        </label>
                                                    
                                                        {/* <div className="collapse-content">
                                                            <ul className="lg:ml-3">
                                                                <li className="hover:text-pink-600">
                                                                    <Link to="#">Mymensingh</Link>
                                                                </li>
                                                                <li className="hover:text-pink-600">
                                                                    <Link to="#">Gazipur</Link>
                                                                </li>
                                                            
                                                            </ul>
                                                        </div> */}
                                                    {/* </div> */}
                                                </li>
                                                
                                                );
                                            })
                                    ) : (
                                        <p>no category</p>
                                    )}
                                   
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={scrollAnimationVariants}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                        <div className="collapse collapse-arrow hover:bg-slate-100 transition-all my-4">
                            <input type="checkbox" id="main-collapse" />
                            <label htmlFor="main-collapse" className="collapse-title  bg-cyan-400 text-white">
                            Location
                            </label>
                        
                            <div className="collapse-content border-2">
                                <ul className="lg:ml-3">
                                {AllDivisionList !== null ? (
                                                AllDivisionList.map((item, i) => {
                                                    return (
                                                    <li key={i} className="focus:text-purple-600 hover:text-purple-600 list-decimal ">
                                                        {/* <div className="collapse collapse-arrow"> */}
                                                            {/* <input type="checkbox" id="nested-collapse-category" /> */}
                                                            <label htmlFor="nested-collapse-category" className="collapse-title collapse-arrow cursor-pointer "> {item.division}
                                                            </label>
                                                        
                                                            {/* <div className="collapse-content">
                                                                <ul className="lg:ml-3">
                                                                    <li className="hover:text-pink-600">
                                                                        <Link to="#">Mymensingh</Link>
                                                                    </li>
                                                                    <li className="hover:text-pink-600">
                                                                        <Link to="#">Gazipur</Link>
                                                                    </li>
                                                                
                                                                </ul>
                                                            </div> */}
                                                        {/* </div> */}
                                                    </li>
                                                    
                                                    );
                                                })
                                        ) : (
                                            <p>no category</p>
                                        )}
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        </motion.div>
                    </div>
                    <div className='lg:ml-4 lg:mt-4 col-span-2'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={scrollAnimationVariants}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                        <span className='text-slate-500 font-semibold'>
                            <NavLink to={'/'}>Home</NavLink> &gt; 
                            <NavLink to={'/all-ads'}>All Ads</NavLink>  
                            {/* <NavLink to="#">Mobiles</NavLink> */}
                        </span>
                        <h1 className='font-bold'>Mobiles and Accessories for Sale in Bangladesh</h1>
                        <p className='text-slate-600 text-sm'>Showing 1-25 of {products.length} ads</p>

                        <ProductSlider/>
                        </motion.div>

                        {products && Array.isArray(products) && products.length > 0 ? (
                            products.map((item, index) => (
                                <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={scrollAnimationVariants}
                                viewport={{ once: false, amount: 0.2 }}
                                key={index}
                            >
                                <Link to={`/ads-details/${item['_id']}`} key={index}>
                                    <div className='mt-9 w-full p-2 rounded-md border-2 hover:shadow-lg shadow-custom-pink border-cyan-500 cursor-pointer bg-purple-50'>
                                        <div className='flex gap-3'>
                                            <img src={item.details.img2} className='w-24 hover:scale-110 transition-all' alt='img' />
                                            <div className='w-full'>
                                                <h1 className='text-lg font-bold'>{item.title} ({item.remark})</h1>
                                                <p className='text-lg '>{item.shortDes.substring(0, 40)}...</p>
                                                <p className='flex gap-2 items-center'><TiLocationOutline /><span>{item.locations.district}, {item.locations.division}</span></p>
                                                <h3 className='text-purple-600 pt-3 font-bold text-lg '>Tk {item.price}</h3>
                                                <p className='text-right text-sm'>Posted at {item.createdAt}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                </motion.div>
                            ))
                        ) : (
                            <p className='pt-10'>Sorry, there are no products for your requirement.</p>
                        )}

                        <div className='mt-9 w-full p-2 rounded-md border-2 hover:shadow-lg shadow-custom-pink border-pink-400 cursor-pointer bg-purple-50 tran '>
                            <div className='flex gap-3'>
                                <img src='product1.jpg' className='w-24 hover:scale-110 transition-all' alt='img' />
                                <div className='w-full'>
                                    <h1 className='text-lg font-bold'>{`Gigabyte 5g 4th generation gaming pc 8gb ram, Ryzon Processor`.substring(0, 40)}...</h1>
                                    <p className='text-lg '>Computer's Processor (new)</p>
                                    <p className='flex gap-2 items-center'><TiLocationOutline /><span>Cox'sBazar, Chattogram</span></p>
                                    <h3 className='text-purple-600 pt-3 font-bold text-lg '>Tk 26,500</h3>
                                    <p className='text-right text-sm'>Posted at 10 March 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={scrollAnimationVariants}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                        <div className='border-2 py-3 rounded-lg'>
                            <div className="px-2 py-3">
                                <span className='flex items-center gap-3'>
                                    <img src='https://i.postimg.cc/C1GcmJHL/safety.jpg' className='w-6' alt='safety'/>
                                    <p className='font-semibold text-lg'>Be careful: avoid online scams</p>
                                </span>
                                <ul className='list-disc pl-3'>
                                    <li className='list-item mb-3'>Never share bank card details or OTP, always verify the product before making payment. Ponno Sheba does not provide delivery service. Always be alert.</li>
                                    <Link to={'/safety-tips'} className='mt-4 text-indigo-600 hover:underline'>See all safety tips</Link>
                                </ul>
                            </div>
                        </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>

);
}

export default AllAds;