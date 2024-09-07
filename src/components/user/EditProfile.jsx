import React, { useEffect, useState } from "react";
import { EditProfileRequest } from "../APIRequest/APIRequest";
import { ToastContainer } from 'react-toastify';
import { ErrorToast, SuccessToast } from "../helper/FormHelper";


const EditProfile = ({profile}) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobile: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        firstName: profile.firstName || "",
        lastName: profile.lastName || "",
        age: profile.age || "",
        mobile: profile.mobile || "",
        address: profile.address || "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [profile]); 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        ErrorToast("Passwords don't match");
        return;
      }

      const postBody = { ...formData };
      delete postBody.confirmPassword; 

      await EditProfileRequest(postBody); 
      SuccessToast("Profile updated successfully");
    } catch (e) {
      console.error(e);
      ErrorToast("Profile update failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="font-bold text-3xl text-center text-gray-800 mb-6">
        Edit Profile
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-amber-800 font-semibold"
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-amber-800 font-semibold"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-amber-800 font-semibold"
            />
          </div>
          <div>
            <label className="block text-gray-700">Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-amber-800 font-semibold"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-amber-800 font-semibold"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-amber-800 font-semibold"
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-amber-800 font-semibold"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 mt-4 text-white bg-amber-600 rounded-md shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50"
          >
            Update
          </button>
        </div>
      </form>
      <ToastContainer position='top-right' />

    </div>
  );

};

export default EditProfile;
