import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCall } from "../services/authServices/axios/apiCall";
import ENDPOINTS from "../api/endpoints";
import { useUserContext } from "../context/userContext.jsx";

const ViewProducts = () => {
  const navigate = useNavigate();
  const { userEmail , setUserEmail} = useUserContext();
  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          apiEndpoint: ENDPOINTS?.dev?.PRODUCT_MODULE?.listProduct(userEmail),
          data: {},
        };

        const response = await getCall(params);
        setProductList(response?.response || []); // Update this line
        console.log("productList from DB", response);
      } catch (error) {
        console.error("Error fetching product list:", error);
      }
    };

    if (userEmail) {
      fetchProductList();
    }
  }, [userEmail]);

  useEffect(() => {
    if (userEmail) {
      localStorage.setItem("userEmail", userEmail);
    }
  }, [userEmail]);
  
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if(storedEmail){
      setUserEmail(storedEmail)
    }
  }, [setUserEmail]);



  const handleEdit = (productId) => {
    console.log("product to be edited : ", productId);
    navigate(`/dashboard/addProduct/${productId}`);
  };

  const handleDelete = (productId) => {
    console.log(`Delete product with ID: ${productId}`);
    // Implement delete logic here
  };

  // Check if productList is empty
  if (productList.length === 0) return <p>No Products Available</p>;

  const tableHeader = Object.keys(productList[0]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h1 className="flex justify-center text-3xl font-serif font-bold text-gray-800 mb-6">
        Product List
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gradient-to-r from-blue-400 to-blue-600 text-white">
              {tableHeader.map((header) => (
                <th
                  key={header}
                  className="border border-gray-300 p-3 font-serif text-left"
                >
                  {header === '_id' ? 'UNIQUE ID' : header
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                    .toUpperCase()}
                </th>
              ))}
              <th className="border border-gray-300 p-3 font-serif text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr key={product?._id} className="hover:bg-gray-100">
                {tableHeader.map((key) => (
                  <td
                    key={key}
                    className="border border-gray-300 p-3 font-sans text-gray-700"
                  >
                    {key === "imageURL" ? (
                      <img
                        src={product[key]}
                        alt={product.name}
                        className="w-20 h-auto rounded-lg shadow-sm"
                      />
                    ) : (
                      product[key] || "N/A"
                    )}
                  </td>
                ))}
                <td className="border border-gray-300 p-3 font-sans">
                  <div className="flex flex-col space-y-2">
                    {" "}
                    {/* Flex container with column layout */}
                    <button
                      onClick={() => handleEdit(product._id)}
                      className="text-blue-600 hover:text-blue-800 font-semibold px-3 py-1 pb-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition duration-150"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-600 hover:text-red-800 font-semibold px-3 py-1 rounded-lg bg-red-50 hover:bg-red-100 transition duration-150"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewProducts;
