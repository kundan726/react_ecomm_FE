import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
export default function DynamicCard({
  title,
  description,
  price,
  imageUrl,
  bgColor,
  productDetails,
}) {
  const navigate = useNavigate();
  const { addToCart, cartItems, setCartItems } = useCartContext();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  // const isAddedToCart = cartItems?.some((item) => item?.id === productDetails?.id)
  useEffect(() => {
    console.log("cartItems",cartItems);
    cartItems.some((item) => {
      if(item?._id == productDetails?._id){
        setIsAddedToCart(true);
      }
    })
  }, [cartItems,productDetails?._id])
  

  const handleCardClick = () => {
    console.log(productDetails);
    if (productDetails && productDetails._id) {
      navigate(`/product/${productDetails._id}`, { state: productDetails });
    } else {
      console.error("Product data or ID is undefined!");
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log("eeeeeeee", productDetails);
    if(!isAddedToCart){
      setIsAddedToCart(true);
      addToCart(productDetails);
    }else{
      navigate('/addToCart');
    }
  };
  return (
    <div
      className={`${bgColor} p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl max-w-full text-amber-800`}
      onClick={handleCardClick}
      style={{
        boxShadow: `inset 0px 4px 8px rgba(0, 0, 0, 0.04),
                    inset 0px -4px 8px rgba(0, 0, 0, 0.04),
                    inset 4px 0px 8px rgba(0, 0, 0, 0.04),
                    inset -4px 0px 8px rgba(0, 0, 0, 0.04)`,
      }}
    >
      {imageUrl && (
        <div className="h-64 w-full mb-4 overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            className="w-full h-full object-contain transition-transform transform hover:scale-110 duration-300"
            alt={title}
          />
        </div>
      )}
      <h1 className="text-3xl font-bold mb-4 text-center uppercase tracking-wider">
        {title}
      </h1>
      <p className="text-lg text-center opacity-90">₹ {price}</p>
      <p className="text-lg text-center opacity-90">{description}</p>

      {/* Icon container */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleAddToCart}
          className="border p-2 rounded-md outline-1 border-gray-400 hover:bg-amber-600 text-black"
        >
          {isAddedToCart ? 'Go to Cart' : 'Add to Cart'}
        </button>
        <button className="border p-2 rounded-md outline-1 border-gray-400 hover:bg-amber-600 text-black">
          BUY NOW
        </button>
      </div>
    </div>
  );
}
