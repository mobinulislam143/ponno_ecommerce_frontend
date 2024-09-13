import './home.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'
import { FaSignsPost } from "react-icons/fa6";
import { BsFilePost } from "react-icons/bs";
import { BsQuestionLg } from "react-icons/bs";
import { IoMailOpen } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { AllCategoryRequest, AllProduct, ListProductByCategoryRequest } from '../APIRequest/APIRequest';
import { useSelector } from 'react-redux';
import CategorySkeleton from '../skeleton/CategorySkeleton';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Home() {

    useEffect(() => {
        AllCategoryRequest();
        AOS.init({
            duration: 1000,
            once: true,
        });

    }, []);


    const AllCategoryList = useSelector((state) => state.products.AllCategory);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            <div className='hero-sec bg-cover bg-center relative'>

                <div className='container mx-auto py-10'>

                    <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-10 items-center'>
                        <div className='col-span-2 text-gray-800' data-aos="fade-right">
                            <h1 className='text-5xl font-bold pb-4'>BUY OR SELL @ YOUR <br /> CONVENIENCE</h1>
                            <p>We give life to you home & property dreams at your budget</p>

                            <div data-aos="zoom-in-right" className='grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 lg:px-0 sm:px-5 gap-7 pt-5 items-center'>
                                <div>
                                    <p className='text-slate-600'>Select Division</p>
                                    <input type='text' className='rounded-md border-0 w-full bg-white h-9 px-2' />
                                </div>
                                <div>
                                    <p className='text-slate-600'>Select District</p>
                                    <input type='text' className='rounded-md border-0 w-full bg-white h-9 px-2' />
                                </div>
                                <div>
                                    <p className='text-slate-600 '>Select Category</p>
                                    <input type='text' className='rounded-md border-0 w-full bg-white h-9 px-2' />
                                </div>
                                <div className='pt-5'>
                                    <NavLink className='btn bg-bg_secondary  py-2 rounded-2xl border-0 text-white hover:bg-bg_secondary_hover'>Search by tag</NavLink>
                                </div>
                            </div>

                        </div>
                        <div className='col-span-2  md:hidden justify-end hidden sm:hidden lg:flex lg:justify-center' >

                            <img className='w-3/4' src='home/heroSec.png' alt='imgs' data-aos="zoom-in-down" />

                        </div>
                    </div>


                </div>
            </div >


            <div className='container mx-auto my-6'>
                <h2 className='text-2xl font-bold mb-4 text-gray-800'>Browse items by category</h2>

                <div className='grid lg:grid-cols-4 sm:grid-cols-1 items-center gap-10'>
                    <div className='col-span-3'>

                        {loading ? (
                            <CategorySkeleton /> // Show skeleton when loading
                        ) : AllCategoryList && AllCategoryList.length > 0 ? (
                            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-5 text-slate-600 items-center grid-cols-2'>
                                {AllCategoryList.map((item, i) => (
                                    <Link data-aos="fade-up" key={i} to={`/by-category/${item['_id']}`} className='hover:bg-slate-50 p-2 rounded-md transition-all'>
                                        <div className='flex items-end gap-1'>
                                            <img src={item.categoryImg} className='w-12' alt='category' />
                                            <div>
                                                <p>{item.categoryName}</p>
                                                <p>16 Ads</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p>No categories available</p> // Optionally handle the case where there are no categories
                        )}

                    </div>

                    <div className="lg:mx-0 md:mx-0 sm:mx-auto text-center w-full max-w-md sm:max-w-full sm:flex sm:flex-col sm:items-center">
                        <div className='mb-9' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <h1 className='font-semibold text-lg text-gray-800'>GET ACCESS OVER</h1>
                            <h2 className='text-3xl text-bg_secondary font-bold'>
                                <span className='text-bg_primary text-3xl'>
                                    <TypeAnimation
                                        sequence={[
                                            'Elite',
                                            1000,
                                            '15033',
                                            1000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        style={{ fontSize: '36px', display: 'inline' }}
                                        repeat={Infinity}
                                    />
                                </span> PROPERTY
                            </h2>
                            <p className='text-slate-600 text-sm'>GET a Features Rich Home</p>
                        </div>

                        <div data-aos="fade-bottom">
                            <h1 className='font-semibold text-lg text-gray-800'>CONNECT OVER</h1>
                            <h2 className='text-3xl text-bg_secondary font-bold'>
                                <span className='text-bg_primary'>
                                    <TypeAnimation
                                        sequence={[
                                            'Expert',
                                            1000,
                                            'Valid',
                                            1000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        style={{ fontSize: '36px', display: 'inline' }}
                                        repeat={Infinity}
                                    />
                                </span> AGENT
                            </h2>
                            <p className='text-slate-600 text-sm'>to help get a property</p>
                        </div>
                    </div>

                </div>


                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 items-center my-6">
                    <div className='flex items-center gap-4 shadow-md p-3 rounded-2xl bg-white py-3' data-aos="flip-up">

                        <img src='home/moneyLogo.png' alt='money' />
                        <div>
                            <h2 className='text-2xl font-bold mb-4 text-gray-700'>Experts Agent</h2>

                            <p className='text-slate-600'>If you want to sell any of your products then you can now. One of the easiest and quickest works</p>
                            <NavLink className='btn bg-bg_tertiary px-5 py-0 rounded-2xl mt-2 hover:bg-bg_secondary text-white transition-all border-0'>Post Ads<BsFilePost /></NavLink>
                        </div>

                    </div>


                    <div className='flex items-center gap-4 shadow-md p-3 rounded-2xl bg-white py-3' data-aos="flip-up">

                        <img src='home/onlineShopping.png' alt='shop' />
                        <div>
                            <h2 className='text-2xl font-bold mb-4 text-gray-700'>Buy items at your fingertips</h2>
                            <p className='text-slate-600'>You can easily select your desired product and purchase it from here. It is easy and safe to use.</p>
                            <NavLink className='btn bg-bg_secondary px-5 py-0 rounded-2xl mt-2 hover:bg-bg_tertiary text-white transition-all border-0'>All Ads<FaSignsPost /></NavLink>
                        </div>

                    </div>
                </div>

                <div className='flex items-center gap-4 shadow-md p-3 rounded-2xl mt-16 bg-white py-4' data-aos="flip-up">

                    <img src='home/delivery-guy.png' alt='shop' />
                    <div>
                        <h2 className='text-2xl font-bold mb-4 text-gray-700'>Find the right product for you</h2>
                        <p className='text-slate-600'>Get the product directly in  hand and have the facility of fastest delivery. In the case of buying  and selling products, you get the benefit of seeing and understanding , that is, you can see any product with your own hands and then buy and sell it. ad! </p>
                        <NavLink className='btn bg-bg_tertiary px-5 py-0 rounded-2xl mt-2 hover:bg-bg_secondary text-white transition-all border-0'>Shop Now<FaLongArrowAltRight /></NavLink>
                    </div>
                </div>






                <div className='grid lg:grid-cols-3 sm:grid-cols-1 items-center gap-36 mt-16' data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">

                    <div className='text-center'>
                        <div className='shadow-md p-5 bg-white inline-flex justify-center rounded-lg items-center'>
                            <BsQuestionLg className='w-10 h-10 text-bg_tertiary' />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold mb-4 text-gray-700'>Phone</h2>
                            <p className='text-slate-600'>If you have to need any help you can call any time. Our teem spend there time for give best service. </p>
                            <p className='text-slate-600 font-semibold'>+88 016471355496</p>
                        </div>
                    </div>

                    <div className='text-center'>
                        <div className='shadow-md p-5 bg-white inline-flex justify-center rounded-lg items-center'>
                            <IoMailOpen className='w-10 h-10 text-bg_tertiary' />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold mb-4 text-gray-700'>E-mail</h2>
                            <p className='text-slate-600'>If you have want to send massage, You can send email us. We shall back to response very quickly! </p>
                            <p className='text-slate-600 font-semibold'>mobinulislammahi@gmail.com</p>
                        </div>
                    </div>

                    <div className='text-center'>
                        <div className='shadow-md p-5 bg-white inline-flex justify-center rounded-lg items-center'>
                            <FaMapLocationDot className='w-10 h-10 text-bg_tertiary' />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold mb-4 text-gray-700'>Location</h2>
                            <p className='text-slate-600'>Our Company has located in Chittagong, Bangladesh. please visit https://mobinulislam.com  </p>
                            <p className='text-slate-600 font-semibold'>Eidgah, Cox’sBazar</p>


                        </div>
                    </div>


                </div>


                <div className='grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-20 mt-16'>
                    <div className='text-slate-600' data-aos="fade-up">
                        <h2 className='text-2xl font-bold mb-4 text-gray-700'>User Documents For Everyone </h2>
                        <p className='text-slate-600'>Real users will complete the registration by providing the email. Once the registration is completed, users can easily access the website. You can update your profile by going to the Personal Profile section. If users want to advertise, they have to advertise through the advertiser form. After adding the ad users have to wait for approval which will be available access by the website owner.</p>
                        <span className='flex items-start gap-2'>
                            <FaArrowAltCircleRight className='text-bg_secondary mt-1' />
                            <p>Buy and Sell any Products.</p>
                        </span>

                        <span className='flex items-start gap-2'>
                            <FaArrowAltCircleRight className='text-bg_secondary mt-1' />
                            <p>Any irrelevant product offered for sale will be rejected.</p>
                        </span>

                        <span className='flex gap-2'>
                            <FaArrowAltCircleRight className='text-bg_secondary mt-1 flex-shrink-0' />
                            <p>Requested not to provide any personal and sensitive information. This responsibility will never be accepted by the website authority. </p>
                        </span>
                    </div>
                    <div>
                        <img src='home/server.png' data-aos="fade-up" alt='server' />
                    </div>
                </div>

                <div className='py-9' data-aos="fade-up">
                    <h2 className='font-bold text-2xl text-slate-700'>About Ponno Sheba, The Popular Marketplace in Bangladesh!</h2>
                    <p className='text-slate-500'>Ponno Sheba is a platform on which you can buy and sell almost everything! We help people buy and sell vehicles, find properties, get jobs or recruit employees, buy and sell mobile phones, purchase electronic products, and much more. With more than 50 categories our solutions are built to be safe, smart, and convenient for our customers.</p>
                </div>


            </div>
        </>
    );
}

export default Home;
