import React from "react";
import { useCartContext } from "../../context/cartContext";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { FIELDS_NOT_TO_SHOW } from "../../constants/constants";
export default function AddToCart() {
  const { cartItems, setCartItems } = useCartContext();
  console.log("cartItems", cartItems);

  const formatLabel = (label) => {
    return label
      .replace("product", "") // Remove the word "product"
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2") // Add space before capital letters
      .trim();
  };

  const handleRemoveFromCart = (_id) => {
    console.log("id", _id);
    const updatedCartItems = cartItems.filter((item) => item._id !== _id);
    setCartItems(updatedCartItems);
    console.log("Updated cartItems", updatedCartItems);
  };

  return (
    <div>
      {cartItems && cartItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2 m-2">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className=" border border-collapse p-4 rounded-lg shadow-md"
            >
              <img
                src={item?.imageURL}
                alt={item?.productName}
                className="w-32 h-32 object-cover mb-4 rounded-md"
              />
              {Object.entries(item).map(([key, value]) => {
                if (key.startsWith("product") && key !== "productImage") {
                  if (!FIELDS_NOT_TO_SHOW.includes(key)) {
                    return (
                      <p key={key} className="text-gray-700">
                        <span className="font-semibold">
                          {formatLabel(key)}:
                        </span>{" "}
                        {value}
                      </p>
                    );
                  }
                }
                return null;
              })}
              <button
                className="mt-2 bg-amber-600 text-white p-2 rounded-md hover:bg-amber-700"
                onClick={() => handleRemoveFromCart(item._id)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        // <p>Your Cart is Empty</p>
        <div className="flex items-center justify-center mt-32 p-4 ">
          {/* Parent container */}
          <div className="flex flex-col items-center justify-center py-10 border border-collapse w-1/2 rounded-md outline-indigo-950 outline-4 bg-slate-100">
            <SentimentVeryDissatisfiedIcon fontSize="large" />
            <p className="text-lg text-gray-700">Your Cart is Empty</p>
            <p className="text-gray-500 mb-4">
              Looks like you haven't added anything to your cart yet.
            </p>
            <button
              className="bg-amber-600 text-white p-2 rounded-md hover:bg-amber-700"
              onClick={() => (window.location.href = "/")}
            >
              Start Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
