import React, { useState } from "react";
import { FaImage, FaDollarSign, FaCalendarAlt, FaListOl, FaEdit, FaTrash } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { DeleteUserAdsRequest } from "../APIRequest/APIRequest";


const UserAds = ({ userAds: initialAds }) => {
  const [userAds, setUserAds] = useState(initialAds); // Create local state for ads
  const navigate = useNavigate();

  const handleUpdate = (product) => {
    Swal.fire({
      title: `Are you sure you want to update ${product.title}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/update-ads/${product['_id']}`);
        Swal.fire(
          'Updated!',
          `${product.title} update page opened.`,
          'success'
        );
      }
    });
  };

  const handleDelete = async (product) => {
    Swal.fire({
      title: `Are you sure you want to delete ${product.title}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await DeleteUserAdsRequest(product['_id']);
          if (response.data.status === "success") {
            // Remove the product from the list after successful deletion
            setUserAds(userAds.filter((ad) => ad['_id'] !== product['_id']));
            Swal.fire(
              'Deleted!',
              `${product.title} has been deleted.`,
              'success'
            );
          } else {
            Swal.fire('Error', 'Failed to delete the product', 'error');
          }
        } catch (error) {
          console.log( product['_id'])
          Swal.fire('Error', 'An error occurred while deleting', 'error');
        }
      }
    });
  };

  return (
    <div className="container mx-auto p-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-5 text-center text-black">User Product</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gradient-to-r from-bg_primary to-bg_secondary text-white">
            <tr>
              <th className="py-3 px-6 text-left"><FaListOl className="inline mr-2" />Serial</th>
              <th className="py-3 px-6 text-left"><FaImage className="inline mr-2" />Product Image</th>
              <th className="py-3 px-6 text-left">Product Name</th>
              <th className="py-3 px-6 text-left"><FaDollarSign className="inline mr-2" />Price</th>
              <th className="py-3 px-6 text-left"><FaCalendarAlt className="inline mr-2" />Date</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {userAds.map((product, index) => (
              <tr key={product['_id']} className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-gray-200"}`}>
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">
                  <Link to={`/ads-details/${product['_id']}`}>
                    <img src={product.details['img1']} alt={product.title} className="h-12 w-12 object-cover rounded-full" />
                  </Link>
                </td>
                <td className="py-4 px-6">{product.title}</td>
                <td className="py-4 px-6">{product.price}</td>
                <td className="py-4 px-6">{product.createdAt}</td>
                <td className="py-4 px-6 flex space-x-2">
                  <NavLink 
                    to="#"
                    className="bg-bg_primary text-white px-4 text-center py-4 rounded-lg hover:bg-bg_primary_hover flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      handleUpdate(product);
                    }}
                  >
                    <FaEdit className="mr-1" /> 
                  </NavLink>
                  <NavLink 
                    to="#"
                    className="bg-bg_secondary text-white px-4 text-center py-4 rounded-lg hover:bg-bg_secondary_hover flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(product);
                    }}
                  >
                    <FaTrash className="mr-1" /> 
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAds;
