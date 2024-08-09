import React from 'react';
// import { NavLink } from 'react-router-dom';


function AdminLogin(props) {
    return (
        <div className='container mx-auto flex justify-center items-center h-screen'>
            <div className='card p-4 shadow-lg shadow-slate-600 rounded-md w-96  dark:bg-gray-900'>
            <form className='mb-10'>
                        <h1 className='text-4xl font-bold my-4 text-center dark:text-gray-300'> Admin Login</h1>

                        <div className='mb-2'>
                            <div>
                                <label className='block text-slate-600 mb-1 font-semibold dark:text-slate-400'>E-mail Address</label>
                                <input className='w-full border border-slate-300 h-11 px-2 rounded-md' placeholder='enter your e-mail' type='email'/>
                            </div>
                        </div>
                    
                        <div className='mb-2'>
                            <div>
                                <label className='block text-slate-600 mb-1 font-semibold dark:text-slate-400'>Password</label>
                                <input className='w-full border border-slate-300 h-11 px-2 rounded-md' placeholder='Password' type='password'/>
                            </div>
                        </div>
                        {/* <div className='mb-2'>
                            <p>If you aren’t registered. Please  </p>
                        </div> */}
                        <button className='btn bg-purple-600 text-white w-full text-lg hover:bg-purple-700 border-none'>Sign in</button>
                    </form>
            </div>
            
        </div>
    );
}

export default AdminLogin;