import React, { useState } from "react";
import chair from "../assets/chair.jpg";
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from "../constants/constants";
const ViewProducts = () => {
  const navigate = useNavigate();
  const [itemToBeEdited,setItemToBeEdited] = useState({})
  // Dummy data array
  // const products = [
  //   {
  //     id: 1,
  //     productName: "Wireless Headphones",
  //     productPrice: "89.99",
  //     productImage: chair,
  //     productDescription:
  //       "High-quality wireless headphones with noise cancellation.",
  //   },
  //   {
  //     id: 2,
  //     productName: "Bluetooth Speaker",
  //     productPrice: "49.99",
  //     productImage: chair,
  //     productDescription:
  //       "Portable Bluetooth speaker with superior sound quality.",
  //   },
  //   {
  //     id: 3,
  //     productName: "Smart Watch",
  //     productPrice: "199.99",
  //     productImage: chair,
  //     productDescription: "Feature-packed smart watch with fitness tracking.",
  //   },
  //   {
  //     id: 4,
  //     productName: "4K Ultra HD TV",
  //     productPrice: "599.99",
  //     productImage: chair,
  //     productDescription:
  //       "Experience stunning picture quality with our 4K Ultra HD TV.",
  //   },
  //   {
  //     id: 5,
  //     productName: "Laptop Stand",
  //     productPrice: "29.99",
  //     productImage: chair,
  //     productDescription: "Ergonomic laptop stand to improve your workspace.",
  //   },
  //   {
  //     id: 6,
  //     productName: "Gaming Mouse",
  //     productPrice: "39.99",
  //     productImage: chair,
  //     productDescription: "Precision gaming mouse with customizable buttons.",
  //   },
  //   {
  //     id: 7,
  //     productName: "Mechanical Keyboard",
  //     productPrice: "79.99",
  //     productImage: chair,
  //     productDescription: "Responsive mechanical keyboard with RGB lighting.",
  //   },
  //   {
  //     id: 8,
  //     productName: "External Hard Drive",
  //     productPrice: "99.99",
  //     productImage: chair,
  //     productDescription: "Portable external hard drive for extra storage.",
  //   },
  //   {
  //     id: 9,
  //     productName: "USB-C Hub",
  //     productPrice: "29.99",
  //     productImage: chair,
  //     productDescription: "Multi-port USB-C hub for connectivity.",
  //   },
  //   {
  //     id: 10,
  //     productName: "Wireless Charger",
  //     productPrice: "19.99",
  //     productImage: chair,
  //     productDescription: "Fast wireless charger for your devices.",
  //   },
  // ];

  const handleEdit = (productId) => {
    const itemToEdit = PRODUCTS.find((item) => item.id === productId);
    if (itemToEdit) {
      // navigate('/dashboard/addproduct', { state: itemToEdit });
      navigate(`/dashboard/addProduct/${productId}`);
    }
  };

  const handleDelete = (productId) => {
    console.log(`Delete product with ID: ${productId}`);
    // Implement delete logic here
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h1 className="flex justify-center text-2xl font-serif">Product List</h1>
      <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 rounded-2xl ">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 font-serif">Product Name</th>
            <th className="border border-gray-300 p-2 font-serif">Product Price</th>
            <th className="border border-gray-300 p-2 font-serif">Product Image</th>
            <th className="border border-gray-300 p-2 font-serif">Product Description</th>
            <th className="border border-gray-300 p-2 font-serif">Action</th>                      
          </tr>
        </thead>
        <tbody>
          {PRODUCTS.map((product)=> (
           <tr key={product?.id}>
            <td className="border border-gray-300 p-2 font-serif">{product.productName}</td>
            <td className="border border-gray-300 p-2 font-serif"> ${product.productPrice}</td>
            <td className="border border-gray-300 p-2 font-serif"><img src={product?.productImage} alt={product?.productDescription} className="w-20 h-auto" /></td>
            <td className="border border-gray-300 p-2 font-serif">{product.productDescription}</td>
            <td className="border border-gray-300 p-2 font-serif"><button onClick={() => handleEdit(product.id)} className="text-red-500 m-2">EDIT</button><button onClick={() => handleDelete(product.id)} className="text-blue-500">DELETE</button></td>
           </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ViewProducts;
