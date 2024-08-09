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
            console.log(email,password)
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
                    <form className='mb-10'>
                        <h1 className='text-4xl font-bold my-4'>Login</h1>

                        <div className='mb-2'>
                            <div>
                                <label className='block text-slate-600 mb-1 font-semibold'>E-mail Address</label>
                                <input ref={(input) => emailRef = input} className='w-full border border-slate-300 h-11 px-2 rounded-md' placeholder='enter your e-mail' type='email' />
                            </div>
                        </div>

                        <div className='mb-2'>
                            <div>
                                <label className='block text-slate-600 mb-1 font-semibold'>Password</label>
                                <div className='relative'>
                                    <input placeholder='password' type={showPassword ? "text" : "password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " ref={(input) => passwordRef = input} />
                                    <span className="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent text-gray-700 focus:outline-none">
                                        <button type='button' onClick={togglePasswordVisibility}>
                                            {
                                                showPassword ? (
                                                    <img width="25" height="25" src="https://img.icons8.com/windows/32/show-password.png" alt="show" />
                                                ) : (
                                                    <img width="25" height="25" src="https://img.icons8.com/pulsar-color/48/hide.png" alt="hide" />
                                                )
                                            }
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <p>If you aren’t registered. Please <NavLink className="font-bold italic hover:underline" to={'/registration'}>Sign-in</NavLink> </p>
                        </div>
                        <button onClick={onLogin} className='btn bg-purple-600 text-white w-full text-lg hover:bg-purple-700'>Sign in</button>
                    </form>
                    <div className='w-full hidden lg:flex justify-center items-center relative'>
                        <img src='userimg/registration.png' className='opacity-25' alt='img' />
                        <div className='text-center absolute'>
                            <h2 className="font-semibold text-3xl">Welcome to Laugh Mart</h2>
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
