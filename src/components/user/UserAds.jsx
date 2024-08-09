import React from "react";
import { FaImage, FaDollarSign, FaCalendarAlt, FaListOl, FaEdit, FaTrash } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const UserAds = ({userAds}) => {
  // Dummy data for demonstration
  const products = [
    { id: 1, image: "https://via.placeholder.com/50", name: "Product 1", price: "$10", date: "2023-01-01" },
    { id: 2, image: "https://via.placeholder.com/50", name: "Product 2", price: "$20", date: "2023-02-01" },
    { id: 3, image: "https://via.placeholder.com/50", name: "Product 3", price: "$30", date: "2023-03-01" },
  ];

  const handleUpdate = (product) => {
    const confirmUpdate = window.confirm(`Are you sure you want to update ${product.name}?`);
    if (confirmUpdate) {
      // Perform the update action
      alert(`${product.name} has been updated.`);
    }
  };

  const handleDelete = (product) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${product.name}?`);
    if (confirmDelete) {
      // Perform the delete action
      alert(`${product.name} has been deleted.`);
    }
  };
  console.log(userAds)

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
                     to={`/update-ads/${product['_id']}`}
                    className="bg-purple-500 text-white px-3 py-1 rounded-full hover:bg-purple-600 flex items-center"
                  >
                    <FaEdit className="mr-1" /> Update
                  </NavLink>
                  <NavLink 
                    onClick={() => handleDelete(product)} 
                    className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 flex items-center"
                  >
                    <FaTrash className="mr-1" /> Delete
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
