import React from 'react';
import { NavLink } from 'react-router-dom';

function Copyright(props) {
    return (
        <div className='relative'>
            <div className='text-white absolute sm:bottom-0 w-full bottom-0 py-1'>
                <p className='text-center dark:text-black'>@All right are reserved by-<NavLink className="cursor-pointer hover:ml-2 hover:text-bg_secondary duration-100" to="https://mahi-lac.vercel.app/">Mahi</NavLink></p>
            </div>
        </div>
    );
}

export default Copyright;