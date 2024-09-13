import React, { useState, useRef, useEffect } from "react";
import { FaBirthdayCake, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { updateProfileImageRequest } from "../APIRequest/APIRequest";
import { ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";

const UserProfile = ({ profile, userAds }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageSrc, setImageSrc] = useState(profile?.profileImg || ""); // Initialize with profile image
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state for products
  const fileInputRef = useRef(null);

  // Update imageSrc when profile changes
  useEffect(() => {
    setImageSrc(profile?.profileImg || "");
  }, [profile]);

  // Simulate data fetching (replace this with actual fetching logic if needed)
  useEffect(() => {
    if (userAds) {
      setLoading(false); // Data fetched, stop loading
    }
  }, [userAds]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const ImgUpload = async () => {
    try {
      const imageData = fileInputRef.current?.files[0];

      if (imageData) {
        setUploading(true);
        const success = await updateProfileImageRequest(imageData);

        if (success) {
          SuccessToast("Image Uploaded Successfully...");
          setImageSrc(URL.createObjectURL(imageData)); // Update the image URL
        } else {
          ErrorToast("Image Upload Failed");
        }
      } else {
        ErrorToast("No image selected");
      }
    } catch (e) {
      ErrorToast("Image Upload Failed");
      console.error("Error uploading profile image:", e);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-5 bg-gray-100 rounded-lg shadow-md">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-between items-center">
        <div className="flex items-center space-x-4 mb-5">
          <div className="w-36">
            <label className="font-semibold" htmlFor="imageInput">
              <img
                src={imagePreview || imageSrc}
                className="h-36 w-36 cursor-pointer my-3 hover:opacity-75 rounded-full transition-all"
                alt="Profile"
              />
            </label>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
          </div>
          <button
            onClick={ImgUpload}
            className={`btn my-3 px-5 py-2 border-none text-white font-bold rounded-full transition-transform transform hover:scale-105 focus:outline-none ${uploading ? 'bg-gray-500' : 'bg-gradient-to-r from-bg_primary to-bg_secondary border-none text-black'}`}
            disabled={uploading}
            style={{
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            {uploading ? "Uploading..." : "Update"}
          </button>
        </div>

        <div className="card bg-white text-black p-4 rounded-md shadow-md shadow-bg_primary_light">
          <h1 className="font-bold text-2xl text-center">Total Products</h1>
          {loading ? (
            <p className="text-center text-gray-600">Loading...</p> // Loading message
          ) : (
            <NavLink to="/user-ads" className="font-bold text-lg text-center">
              {userAds.length} {/* Product length */}
            </NavLink>
          )}
        </div>
      </div>

      <div className="py-5">
        <h3 className="text-4xl font-bold mb-5 text-black">
          Hi!! {profile.firstName} {profile.lastName} 👋👋
        </h3>
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
