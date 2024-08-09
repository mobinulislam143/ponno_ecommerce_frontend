import React, { useState } from "react";
import { FaBirthdayCake, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const UserProfile = ({profile}) => {
  const [imagePreview, setImagePreview] = useState(null);
  // const [imageSrc, setImageSrc] = useState("userimg/productImg.jpg");
  const [imageSrc, setImageSrc] = useState(profile?.profileImg || profile.profileImg);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
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
        <button className="btn my-3 px-5 py-2 text-white font-bold rounded-full transition-transform transform hover:scale-105 focus:outline-none"
                style={{
                  background: 'linear-gradient(107deg, rgb(244, 17, 113), rgb(253, 238, 10))',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                }}>
          Update
        </button>
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
    </div>
  );
};

export default UserProfile;
