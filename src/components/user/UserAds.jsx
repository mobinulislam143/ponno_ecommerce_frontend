import React from "react";
import { FaImage, FaDollarSign, FaCalendarAlt, FaListOl, FaEdit, FaTrash } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserAds = ({ userAds }) => {
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
        // Navigate to the update page after confirmation
        navigate(`/update-ads/${product['_id']}`);
        Swal.fire(
          'Updated!',
          `${product.title} update page opened.`,
          'success'
        );
      }
    });
  };

  const handleDelete = (product) => {
    Swal.fire({
      title: `Are you sure you want to delete ${product.title}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the delete action
        Swal.fire(
          'Deleted!',
          `${product.title} has been deleted.`,
          'success'
        );
      }
    });
  };

  console.log(userAds);

  return (
    <div className="container mx-auto p-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-5 text-center text-black">User Product</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gradient-to-r from-purple-400 to-purple-600 text-white">
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
              <tr key={product.id} className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-gray-200"}`}>
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">
                  <Link to={`/ads-details/${product['_id']}`}>
                    <img src={product.details['img1']} alt={product.name} className="h-12 w-12 object-cover rounded-full" />
                  </Link>
                </td>
                <td className="py-4 px-6">{product.title}</td>
                <td className="py-4 px-6">{product.price}</td>
                <td className="py-4 px-6">{product.createdAt}</td>
                <td className="py-4 px-6 flex space-x-2">
                  <NavLink 
                    to="#"
                    className="bg-purple-500 text-white px-4 text-center py-4 rounded-lg hover:bg-purple-600 flex items-center"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      handleUpdate(product);
                    }}
                  >
                    <FaEdit className="mr-1" /> 
                  </NavLink>
                  <NavLink 
                    to="#"
                    className="bg-red-500 text-white px-4 text-center py-4 rounded-lg hover:bg-red-600 flex items-center"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
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
