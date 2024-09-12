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
        <div className='container-fluid lg:h-screen flex justify-center items-center'>
            <div className='container mx-auto my-20 sm:mt-40 md:mt-40'>
                <div className='grid lg:grid-cols-2 items-center gap-16'>
                    <form className='mx-1 sm:mx-6'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold my-4 text-bg_primary text-center'>Create Account</h1>

                        <div className='mb-4'>
                            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2'>
                                <div>
                                    <label htmlFor='firstName' className='block text-slate-600 mb-1 font-semibold'>First Name</label>
                                    <input
                                        id='firstName'
                                        className='w-full border border-slate-300 h-11 px-3 rounded-md bg-white text-sm md:text-base'
                                        placeholder='First Name'
                                        ref={(input) => fnameRef = input}
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='lastName' className='block text-slate-600 mb-1 font-semibold'>Last Name</label>
                                    <input
                                        id='lastName'
                                        className='w-full border border-slate-300 h-11 px-3 rounded-md bg-white text-sm md:text-base'
                                        placeholder='Last Name'
                                        ref={(input) => lnameRef = input}
                                        type='text'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='email' className='block text-slate-600 mb-1 font-semibold'>E-mail Address</label>
                            <input
                                id='email'
                                className='w-full border border-slate-300 h-11 px-3 rounded-md bg-white text-sm md:text-base'
                                placeholder='Enter your e-mail'
                                ref={(input) => emailRef = input}
                                type='email'
                            />
                        </div>

                        <div className='mb-4'>
                            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-4'>
                                <div>
                                    <label htmlFor='age' className='block text-slate-600 mb-1 font-semibold'>Age</label>
                                    <input
                                        id='age'
                                        className='w-full border border-slate-300 h-11 px-3 rounded-md bg-white text-sm md:text-base'
                                        placeholder='Age'
                                        ref={(input) => ageRef = input}
                                        type='text'
                                    />
                                </div>
                                <div className='md:col-span-3'>
                                    <label htmlFor='mobile' className='block text-slate-600 mb-1 font-semibold'>
                                        Mobile <span className='text-indigo-800 text-sm'>(use BDT mobile number)</span>
                                    </label>
                                    <input
                                        id='mobile'
                                        className='w-full border border-slate-300 h-11 px-3 rounded-md bg-white text-sm md:text-base'
                                        placeholder='Mobile'
                                        ref={(input) => mobileRef = input}
                                        type='text'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='address' className='block text-slate-600 mb-1 font-semibold'>Address</label>
                            <input
                                id='address'
                                className='w-full border border-slate-300 h-11 px-3 rounded-md bg-white text-sm md:text-base'
                                placeholder='State, City, Area'
                                ref={(input) => addressRef = input}
                                type='text'
                            />
                        </div>

                        <div className='mb-4'>
                            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2'>
                                <div>
                                    <label htmlFor='password' className='block text-slate-600 mb-1 font-semibold'>Password</label>
                                    <div className='relative'>
                                        <input
                                            id='password'
                                            type={showPassword ? 'text' : 'password'}
                                            className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg p-2.5'
                                            ref={(input) => passwordRef = input}
                                        />
                                        <span className='absolute inset-y-0 right-0 flex items-center px-3'>
                                            <button type='button' onClick={togglePasswordVisibility} className='text-gray-700 focus:outline-none'>
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
                                    <label htmlFor='confirmPassword' className='block text-slate-600 mb-1 font-semibold'>Confirm Password</label>
                                    <div className='relative'>
                                        <input
                                            id='confirmPassword'
                                            type={showPassword ? 'text' : 'password'}
                                            className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg p-2.5'
                                            ref={(input) => ConfirmPasswordRef = input}
                                        />
                                        <span className='absolute inset-y-0 right-0 flex items-center px-3'>
                                            <button type='button' onClick={togglePasswordVisibility} className='text-gray-700 focus:outline-none'>
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

                        <div className='mb-4'>
                            <p className='text-black'>
                                If you already have an account, please{' '}
                                <NavLink className='font-bold italic hover:underline text-bg_primary' to={'/login'}>
                                    Log in
                                </NavLink>
                            </p>
                        </div>

                        <button
                            className='btn mb-3 bg-bg_primary text-white w-full text-lg hover:bg-bg_primary_hover border-0 outline-none'
                            onClick={onRegistration}
                        >
                            Sign up
                        </button>
                    </form>

                    <div className='w-full hidden lg:flex justify-center items-center relative'>
                        <img src='userimg/registration.png' className='opacity-25' alt='img' />
                        <div className='text-center absolute'>
                            <h2 className="font-bold text-4xl text-bg_secondary">Welcome to Ponno Sheba</h2>
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
