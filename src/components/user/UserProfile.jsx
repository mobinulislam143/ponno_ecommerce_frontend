import React, { useState } from "react";
import { FaBirthdayCake, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { updateProfileImageRequest } from "../APIRequest/APIRequest";
import { ToastContainer } from "react-toastify";

const UserProfile = ({profile}) => {
  const [imagePreview, setImagePreview] = useState(null);
  

  const [imageSrc, setImageSrc] = useState(profile?.profileImg || profile.profileImg);

  const [uploading, setUploading] = useState(false)


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const ImgUpload = async () => {
    try {
      const fileInput = document.getElementById("imageInput");
      const imageData = fileInput.files[0];

      if (imageData) {
        setUploading(true);
        const success = await updateProfileImageRequest(imageData);

        if (success) {
          SuccessToast("Image Upload Successfully...");
          setImageSrc(URL.createObjectURL(imageData)); 
        } 
      } else {
        console.log("Image cannot be uploaded");
        ErrorToast("Something went wrong");
      }
    } catch (e) {
      ErrorToast("Image Upload Failed");
      console.log("Error uploading profile image:", e);
    } finally {
      setUploading(false); 
    }
  };

  return (
    <div className="container mx-auto p-5 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-5">
        <div className="w-36">
          <label className="font-semibold" htmlFor="imageInput">
            <img
              src={imageSrc}
              className="h-36 w-36 cursor-pointer my-3 hover:opacity-75 rounded-full transition-all"
              alt="Profile"
            />
          </label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        {uploading ? (
        <button 
          className="btn my-3 px-5 py-2 text-white bg-gray-500 font-bold rounded-full transition-transform transform hover:scale-105 focus:outline-none disabled"
          disabled // Disable button while uploading
          style={{
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
          }}>
          Uploading...
        </button>
      ) : (
        <button 
          onClick={ImgUpload} 
          className="btn my-3 px-5 py-2 text-white font-bold rounded-full transition-transform transform hover:scale-105 focus:outline-none"
          style={{
            background: 'linear-gradient(107deg, rgb(244, 17, 113), rgb(253, 238, 10))',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
          }}>
          Update
        </button>
      )}
       

      </div>
      <div className="py-5">
        <h3 className="text-4xl font-bold mb-5 text-black">Hi!! {profile.firstName} {profile.lastName}</h3>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold mb-4 text-black">Information</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <FaBirthdayCake className="text-yellow-500" />
              <p className="text-lg text-black">Age: {profile.age}</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-green-500" />
              <p className="text-lg text-black">Mobile: +880 {profile.mobile}</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-red-500" />
              <p className="text-lg text-black">Address: {profile.address}</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default UserProfile;
