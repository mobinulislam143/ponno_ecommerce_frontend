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
import AOS from 'aos';
import 'aos/dist/aos.css';



function AllAds({ products }) {

 


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
     useEffect(() => {
        AOS.init({
          duration: 1000, // Duration of the animation
          once: true,     // Whether animation should happen only once
        });
      }, []);

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
            
                <div data-aos="fade-up" className='bg-bg_primary_light lg:flex justify-between items-center p-5 rounded-lg'>

                    <p className='px-2 rounded-2xl bg-bg_secondary text-white'>Get Safe Browser in your Location!</p>
                    <div>
                        <span className='text-bg_primary'>
                            <NavLink to='/'>Home </NavLink>/
                            <NavLink to='/all-ads'> All Ads </NavLink>/
                            <NavLink to='/all-ads'> Current Ads</NavLink>
                        </span>
                    </div>
                </div>
               
                
                <div className='pt-5 lg:flex justify-between mb-2' data-aos="fade-up">
                    <h1 className='text-lg flex items-center gap-2 text-black'><TbCategoryPlus />Category: All</h1>
                    <h1 className='text-lg flex items-center gap-2 text-black'><MdMyLocation />Location: Cumilla</h1>
                    
                    <label className="input  flex border border-black outline-none focus:border-bg_secondary bg-white items-center gap-2 ">
                        <input type="text" className="grow lg:w-72 text-black" placeholder="Search" />
                        <NavLink className='bg-bg_secondary p-3 text-white rounded-lg'><FaSearch /></NavLink>
                    </label>
                </div>
                <hr/>
          

                <div className='grid lg:grid-cols-4 sm:grid-cols-1 mt-4 gap-4 '>
                    <div data-aos="fade-right" className='border-r-2 px-2'>
                        
                        <div className='flex items-center justify-between my-2'>
                            <p className="text-lg text-slate-800">Sort result by...</p>
                            <NavLink to={'/all-ads'} className='btn bg-bg_secondary hover:bg-bg_secondary_hover border-none text-white'>Clear Filter</NavLink>
                        </div>
                        
                        <div tabIndex={0} className="collapse collapse-arrow hover:bg-slate-100 transition-all my-4">
                            <input type='checkbox' />
                            <div className="collapse-title bg-bg_primary text-white font-semibold ">Category</div>
                            
                            <div className="collapse-content border-2"> 
                                <ul className="lg:ml-3">
                                    {AllCategoryList !== null ? (
                                            AllCategoryList.map((item, i) => {
                                                return (
                                                <li key={i} className="focus:text-bg_secondary hover:text-bg_secondary text-black list-decimal ">
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
                            <h1 className='text-black text-lg font-semibold'>Price Range</h1>
                            <label className='text-black'>Minimum Price 500</label>
                            <input min={0} max={500000} step={500} className="range range-info h-3" type='range' />
                            <label className='text-black'>Maximum Price 500</label>
                            <input min={0} max={500000} step={500} className="range range-info h-3" type='range' />
                        </div>
                        <hr/>
                        


                        
                        <div tabIndex={0} className="collapse collapse-arrow hover:bg-slate-100 transition-all my-4">
                            <input type='checkbox' />
                            <div className="collapse-title bg-bg_primary text-white font-semibold ">Brand</div>
                            
                            <div className="collapse-content border-2"> 
                                <ul className="lg:ml-3">
                                    {AllBrandList !== null ? (
                                            AllBrandList.map((item, i) => {
                                                return (
                                                <li key={i} className="focus:text-bg_secondary hover:text-bg_secondary text-black list-decimal ">
                                                    {/* <div className="collapse collapse-arrow"> */}
                                                        {/* <input type="checkbox" id="nested-collapse-category" /> */}
                                                        {/* <label htmlFor="nested-collapse-brand" className="collapse-title collapse-arrow cursor-pointer text-black ">{item.brandName}
                                                        </label> */}
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
                        

                        
                        <div className="collapse collapse-arrow hover:bg-slate-100 transition-all my-4">
                            <input type="checkbox" id="main-collapse" />
                            <label htmlFor="main-collapse" className="collapse-title  bg-bg_primary text-white">
                            Location
                            </label>
                        
                            <div className="collapse-content border-2">
                                <ul className="lg:ml-3">
                                {AllDivisionList !== null ? (
                                                AllDivisionList.map((item, i) => {
                                                    return (
                                                    <li key={i} className="focus:text-bg_secondary hover:text-bg_secondary text-black list-decimal ">
                                                        {/* <div className="collapse collapse-arrow"> */}
                                                            {/* <input type="checkbox" id="nested-collapse-category" /> */}
                                                           

                                                            <label htmlFor="nested-collapse-brand" className="collapse-title collapse-arrow cursor-pointer text-black">{item.division}
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
                        
                    </div>
                    <div className='lg:ml-4 lg:mt-4 col-span-2'>
                        
                        <span className='text-slate-500 font-semibold '>
                            <NavLink className="text-black" to={'/'}>Home &gt; </NavLink>
                            <NavLink className="text-bg_primary" to={'/all-ads'}>All Ads</NavLink>  
                            {/* <NavLink to="#">Mobiles</NavLink> */}
                        </span>
                        <h1 className='font-bold text-black'>Mobiles and Accessories for Sale in Bangladesh</h1>
                        <p className='text-slate-600 text-sm'>Showing 1-25 of {products.length} ads</p>

                        <ProductSlider />
                        

                        {products && Array.isArray(products) && products.length > 0 ? (
                            products.map((item, index) => (
                                
                                <Link to={`/ads-details/${item['_id']}`}>
                                    <div  data-aos="fade-up" className='mt-9 w-full p-2 rounded-md border hover:shadow-md shadow-custom-pink border-bg_primary cursor-pointer bg-purple-50 shadow-bg_primary'>
                                        <div className='flex gap-3'>
                                            <img src={item.details.img2} className='w-24 hover:scale-110 transition-all' alt='img' />
                                            <div className='w-full'>
                                                <h1 className='text-2xl font-bold text-bg_secondary'>{item.title} ({item.remark})</h1>
                                                <p className='text-lg text-black'>{item.shortDes.substring(0, 40)}...</p>
                                                <p className='flex gap-2 items-center text-black'><TiLocationOutline /><span>{item.locations.district}, {item.locations.division}</span></p>
                                                <h3 className='text-bg_primary pt-3 font-bold text-lg '>Tk {item.price}</h3>
                                                <p className='text-right text-sm text-black'>Posted at {item.createdAt}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                
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
                        
                        <div className='border-2 py-3 rounded-lg overflow-x-hidden' data-aos="fade-left">
                            <div className="px-2 py-3">
                                <span className='flex items-center gap-3 text-bg_primary'>
                                    <img src='https://i.postimg.cc/C1GcmJHL/safety.jpg' className='w-6' alt='safety'/>
                                    <p className='font-semibold text-lg text-bg_secondary'>Be careful: avoid online scams</p>
                                </span>
                                <ul className='list-disc pl-3'>
                                    <li className='list-item mb-3 text-black'>Never share bank card details or OTP, always verify the product before making payment. Ponno Sheba does not provide delivery service. Always be alert.</li>
                                    <Link to={'/safety-tips'} className='mt-4 text-bg_primary hover:underline'>See all safety tips</Link>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

);
}

export default AllAds;