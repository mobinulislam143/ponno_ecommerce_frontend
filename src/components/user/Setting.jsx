import React from "react";
import { LogoutRequest } from "../APIRequest/APIRequest";
import { SuccessToast } from "../helper/FormHelper";
import { ToastContainer } from 'react-toastify'


const Setting = () => {
  const onLogout = async()=>{
    console.log('logout')
    try{
      await LogoutRequest()
      window.location.href = '/'
      SuccessToast('Log out Successfully')
    }catch(e){
      console.log('cannot logout')
    }
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Account Settings</h1>
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2  className="text-xl font-semibold mb-4">Logout</h2>
        <p className="text-gray-600 mb-6">Click below to logout from your account.</p>
        <button onClick={onLogout} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">Logout</button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-8 mt-6">
        <h2 className="text-xl font-semibold mb-4">Remove Account</h2>
        <p className="text-gray-600 mb-6">If you wish to permanently remove your account, please click below. This action is irreversible.</p>
        <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">Remove Account</button>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Setting;
