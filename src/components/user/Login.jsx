import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from '../helper/FormHelper';
import { LoginRequest } from '../APIRequest/APIRequest';
import { ToastContainer } from 'react-toastify'

function Login(props) {
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    let emailRef = useRef();
    let passwordRef = useRef();

    let onLogin = (e) => {
        e.preventDefault();
        let email = emailRef.value;
        let password = passwordRef.value;

        if (!IsEmail(email)) {
            ErrorToast("Valid Email Address Required !");
        } else if (IsEmpty(password)) {
            ErrorToast("Password must be required");
        } else {
            console.log(email, password)
            LoginRequest(email, password).then((result) => {
                if (result === true) {
                    SuccessToast("Login Success");
                    window.location.href = "/";
                } else {
                    ErrorToast("Something Went Wrong!!!");
                }
            });
        }
    }


    return (
        <div className='container-fluid h-screen flex justify-center items-center'>
            <div className='container mx-auto sm:mt-40'>
                <div className='grid lg:grid-cols-2 items-center gap-16'>
                    <form className='mb-10 mx-3 md:mx-6 lg:mx-12'>
                        <h1 className='text-3xl md:text-3xl lg:text-4xl font-bold my-4 text-bg_primary text-center'>Login</h1>

                        <div className='mb-4'>
                            <label htmlFor='email' className='block text-slate-600 mb-1 font-semibold'>E-mail Address</label>
                            <input
                                id='email'
                                ref={(input) => emailRef = input}
                                className='w-full border border-slate-300 bg-white h-11 px-3 rounded-md text-sm md:text-base'
                                placeholder='Enter your e-mail'
                                type='email'
                            />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='password' className='block text-slate-600 mb-1 font-semibold'>Password</label>
                            <div className='relative'>
                                <input
                                    id='password'
                                    placeholder='Password'
                                    type={showPassword ? 'text' : 'password'}
                                    className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg p-2.5'
                                    ref={(input) => passwordRef = input}
                                />
                                <span className='absolute inset-y-0 right-0 flex items-center px-3'>
                                    <button
                                        type='button'
                                        onClick={togglePasswordVisibility}
                                        className='text-gray-700 focus:outline-none'
                                    >
                                        {showPassword ? (
                                            <img width="25" height="25" src="https://img.icons8.com/windows/32/show-password.png" alt="show" />
                                        ) : (
                                            <img width="25" height="25" src="https://img.icons8.com/pulsar-color/48/hide.png" alt="hide" />
                                        )}
                                    </button>
                                </span>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <p className='text-black'>
                                If you aren’t registered, please{' '}
                                <NavLink className="font-bold text-bg_primary italic hover:underline" to={'/registration'}>
                                    Sign up
                                </NavLink>
                            </p>
                        </div>

                        <button
                            onClick={onLogin}
                            className='btn bg-bg_primary border-none text-white w-full text-lg md:text-xl hover:bg-bg_primary_hover'
                        >
                            Log in
                        </button>
                    </form>

                    <div className='w-full hidden lg:flex justify-center items-center relative'>
                        <img src='userimg/registration.png' className='opacity-25' alt='img' />
                        <div className='text-center absolute'>
                            <h2 className="font-bold text-4xl text-bg_secondary">Welcome to Ponno Sheba</h2>
                            <p className=' text-slate-600 pt-3'>Log in to manage your account.</p>
                            <div className='flex-shrink-0 flex flex-col gap-y-5 mt-5'>
                                <h3 className="text-slate-700 text-2xl flex items-center gap-3"> <img src='userimg/cart.png' className='w-10' alt='bag' /> <span>Start posting your own ads.</span></h3>
                                <h3 className="text-slate-700 text-2xl flex items-center gap-3 "> <img src='userimg/search.png' className='w-10 opacity-70' alt='bag' /> <span>Mark ads as favorite and view them later.</span></h3>
                                <h3 className="text-slate-700 text-2xl flex items-center gap-3 "> <img src='userimg/bag.png' className='w-10 opacity-80' alt='bag' /><span>View and manage your ads at your convenience.</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer position='top-right' />
            </div>
        </div>
    );
}

export default Login;
