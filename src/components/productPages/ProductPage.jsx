import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state;
  console.log("product", product);
  return (
    <div className="p-1">
      <div className="flex justify-between mb-8">
        <div className="w-1/2">
          <div className="mb-6">
            <img
              src={product?.productImage}
              alt={product?.productName}
              className="w-full max-h-96 object-contain"
            />
          </div>
          <div className="text-lg font-semibold flex justify-normal items-center ml-16">
            {/* <p className="font-semibold text-2xl mb-4">Description</p> */}
            <p>{product?.productDescription}</p>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-1/2 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6">{product?.productName}</h2>
          <p className="text-lg font-medium mb-4">
            Price: ${product?.productPrice}
          </p>
          {/* Add more details about payment info, discount, offers */}
          <p className="text-lg mb-4">Discount: 10%</p>{" "}
          {/* Example of discount */}
          <p className="text-lg mb-4">Offer: Buy 1 Get 1 Free</p>{" "}
          {/* Example offer */}
          <p className="text-lg mb-4">
            Payment Options: Credit Card, PayPal, etc.
          </p>
          <div className="flex justify-between pt-4">
            <button className="bg-amber-500 border rounded-md border-collapse outline-4 outline-black-400 shadow-md p-4 hover:bg-amber-700 text-black">
              ADD TO CART
            </button>
            <button className="bg-amber-500 border rounded-md border-collapse outline-4 outline-black-400 shadow-md p-4 hover:bg-amber-700 text-black">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Products Section */}
      {/* <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-6">Suggested Products</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="suggested-product.jpg"
              alt="Suggested Product"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold text-center">Suggested Product Name</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
