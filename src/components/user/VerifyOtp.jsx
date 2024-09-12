import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorToast, IsEmpty, SuccessToast } from '../helper/FormHelper';
import { ToastContainer } from 'react-toastify'
import { VerifyEmailRequest } from '../APIRequest/APIRequest';

function VerifyOtp(props) {

    const navigate = useNavigate()

    let otpRef = useRef()

    const onFormSubmit = async (e) => {
        e.preventDefault()
        let otp = otpRef.value
        if (IsEmpty(otp)) {
            ErrorToast("Otp is Required.")
        } else {
            VerifyEmailRequest(otp).then((result) => {
                if (result === true) {
                    console.log(otp)
                    navigate('/login')
                    SuccessToast("Verify Completed")
                }
            })
        }
    }

    return (
        <div className='container-fluid h-screen flex justify-center items-center'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-16'>
                    <div className='w-full hidden lg:flex justify-center'>
                        <img src='userimg/registration.png' alt='registerimg' />
                    </div>
                    <form className='mb-10 px-4 sm:px-7 md:px-8 lg:px-0'>
                        <h1 className='text-4xl font-bold my-4 text-center text-bg_primary'>Verify OTP</h1>

                        <div className='mb-4'>
                            <label htmlFor='otp' className='block text-slate-600 mb-1 font-semibold'>OTP</label>
                            <input
                                id='otp'
                                className='w-full border border-gray-300 bg-gray-50 h-11 px-3 rounded-md'
                                placeholder='Enter your valid OTP'
                                ref={otpRef}
                                type='number'
                            />
                        </div>

                        <button
                            onClick={onFormSubmit}
                            className='btn bg-bg_primary text-white w-full text-lg hover:bg-bg_primary_hover border-0 mt-4'
                        >
                            Verify
                        </button>
                    </form>

                </div>
            </div>
            <ToastContainer position='top-right' />
        </div>
    );
}

export default VerifyOtp;