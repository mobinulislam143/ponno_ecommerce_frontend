import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './registration.css';
import { ErrorToast, IsEmail, IsEmpty, IsMobile, SuccessToast } from '../helper/FormHelper';
import { RegistrationRequest } from '../APIRequest/APIRequest';
import { ToastContainer } from 'react-toastify';

function Registration(props) {

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    let emailRef = useRef();
    let fnameRef = useRef();
    let lnameRef = useRef();
    let ageRef = useRef();
    let mobileRef = useRef();
    let addressRef = useRef();
    let passwordRef = useRef();
    let ConfirmPasswordRef = useRef();

    let navigate = useNavigate();

    const onRegistration = (e) => {
        e.preventDefault();

        let email = emailRef.value;
        let firstName = fnameRef.value;
        let lastName = lnameRef.value;
        let age = ageRef.value;
        let mobile = mobileRef.value;
        let address = addressRef.value;
        let password = passwordRef.value;
        let confirmPassword = ConfirmPasswordRef.value;

        if (!IsEmail(email)) {
            ErrorToast("Valid Email Address Required !");
        } else if (IsEmpty(firstName)) {
            ErrorToast("First Name Required !");
        } else if (IsEmpty(lastName)) {
            ErrorToast("Last Name Required !");
        } else if (IsEmpty(age)) {
            ErrorToast("Age is Required !");
        } else if (IsEmpty(address)) {
            ErrorToast("Address is Required !");
        } else if (!IsMobile(mobile)) {
            ErrorToast("Valid Mobile Required !");
        } else if (IsEmpty(password)) {
            ErrorToast("Password Required !");
        } else if (IsEmpty(confirmPassword)) {
            ErrorToast("Confirm Password is Required !");
        } else {
            RegistrationRequest(email, firstName, lastName, age, mobile, address, password, confirmPassword).then((result) => {
                if (result === true) {
                    SuccessToast('Registration Complete')
                    navigate('/verifyEmail');
                }
            });
        }
    };

    return (
        <div className='container-fluid h-screen flex justify-center items-center'>
            <div className='container mx-auto my-20 sm:mt-40 md:mt-40'> 
                <div className='grid lg:grid-cols-2 items-center gap-16'>
                    <form className='mb-10 w-full'>
                        <h1 className='text-4xl font-bold my-4'>Create Account</h1>

                        <div className='mb-2'>
                            <div className='grid gap-3 sm:grid-cols-1 md:grid-cols-2'>
                                <div>
                                    <label className='block text-slate-600 mb-1 font-semibold'>First Name</label>
                                    <input className='w-full border border-slate-300 h-11 px-2 rounded-md' placeholder='First Name' ref={(input) => fnameRef = input} type='text' />
                                </div>
                                <div>
                                    <label className='block text-slate-600 mb-1 font-semibold'>Last Name</label>
                                    <input ref={(input) => lnameRef = input} className='w-full border border-slate-300 h-11 px-2 rounded-md' placeholder='Last Name' type='text' />
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div>
                                <label className='block text-slate-600 mb-1 font-semibold'>E-mail Address</label>
                                <input className='w-full border border-slate-300 h-11 px-2 rounded-md' ref={(input) => emailRef = input} placeholder='Enter your e-mail' type='email' />
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='grid gap-3 sm:grid-cols-1 md:grid-cols-4'>
                                <div>
                                    <label className='block text-slate-600 mb-1 font-semibold'>Age</label>
                                    <input ref={(input) => ageRef = input} className='w-full border border-slate-300 h-11 px-2 rounded-md' placeholder='Age' type='text' />
                                </div>
                                <div className='md:col-span-3'>
                                    <label className='block text-slate-600 mb-1 font-semibold'>Mobile <span className='text-indigo-800 text-sm'>(use BDT mobile number)</span></label>
                                    <input ref={(input) => mobileRef = input} className='w-full border border-slate-300 h-11 px-2 rounded-md' placeholder='Mobile' type='text' />
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div>
                                <label className='block text-slate-600 mb-1 font-semibold'>Address</label>
                                <input ref={(input) => addressRef = input} className='w-full border border-slate-300 h-11 px-2 rounded-md' placeholder='State, City, Area' type='text' />
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='grid gap-3 sm:grid-cols-1 md:grid-cols-2'>
                                <div>
                                    <label className='block text-slate-600 mb-1 font-semibold'>Password</label>
                                    <div className='relative'>
                                        <input type={showPassword ? "text" : "password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" ref={(input) => passwordRef = input} />
                                        <span className="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent text-gray-700 focus:outline-none">
                                            <button type='button' onClick={togglePasswordVisibility}>
                                                {showPassword ? (
                                                    <img width="25" height="25" src="https://img.icons8.com/windows/32/show-password.png" alt="show" />
                                                ) : (
                                                    <img width="25" height="25" src="https://img.icons8.com/pulsar-color/48/hide.png" alt="hide" />
                                                )}
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label className='block text-slate-600 mb-1 font-semibold'>Confirm Password</label>
                                    <div className='relative'>
                                        <input type={showPassword ? "text" : "password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" ref={(input) => ConfirmPasswordRef = input} />
                                        <span className="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent text-gray-700 focus:outline-none">
                                            <button type='button' onClick={togglePasswordVisibility}>
                                                {showPassword ? (
                                                    <img width="25" height="25" src="https://img.icons8.com/windows/32/show-password.png" alt="show" />
                                                ) : (
                                                    <img width="25" height="25" src="https://img.icons8.com/pulsar-color/48/hide.png" alt="hide" />
                                                )}
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <p>If you already have an account? Please <NavLink className="font-bold italic hover:underline" to={'/login'}>Log-in</NavLink></p>
                        </div>
                        <button className='btn bg-purple-600 text-white w-full text-lg hover:bg-purple-700' onClick={onRegistration}>Sign in</button>
                    </form>

                    <div className='w-full hidden lg:flex justify-center items-center relative'>
                        <img src='userimg/registration.png' className='opacity-25' alt='img' />
                        <div className='text-center absolute'>
                            <h2 className="font-semibold text-3xl">Welcome to Laugh Mart</h2>
                            <p className='text-slate-700 pt-3'>Sign in to manage your account.</p>
                            <div className='flex-shrink-0 flex flex-col gap-y-5 mt-5'>
                                <h3 className="text-slate-700 text-2xl flex items-center gap-3"> <img src='userimg/cart.png' className='w-10' alt='bag' /> <span>Start posting your own ads.</span></h3>
                                <h3 className="text-slate-700 text-2xl flex items-center gap-3 "> <img src='userimg/search.png' className='w-10 opacity-70' alt='bag' /> <span>Mark ads as favorite and view them later.</span></h3>
                                <h3 className="text-slate-700 text-2xl flex items-center gap-3 "> <img src='userimg/bag.png' className='w-10 opacity-80' alt='bag' /><span>View and manage your ads at your convenience.</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position='top-right' />
        </div>
    );
}

export default Registration;
