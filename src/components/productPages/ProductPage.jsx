import React, { useEffect,useState } from "react";
import { useLocation, useNavigate, useNavigation, useParams } from "react-router-dom";
import { getCall } from "../../services/authServices/axios/apiCall";
import ENDPOINTS from "../../api/endpoints";
import { useCartContext } from "../../context/cartContext";
import priceCalculator from '../../utilities/utilities';

export default function ProductPage() {
  const navigate = useNavigate()
  const { id } = useParams();
  const location = useLocation();
  const product = location.state;
  console.log("product", product);
  const [priceAfterDiscount,setPriceAfterDiscount] = useState(null)
  const { addToCart, cartItems, setCartItems } = useCartContext();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  useEffect(() => {
    console.log("cartItems",cartItems);
    cartItems.some((item) => {
      if(item?._id == product?._id){
        setIsAddedToCart(true);
      }
    })
  }, [cartItems,product?._id])
  useEffect(() => {
    const fetchData = async () => {
      const params = {
        apiEndpoint: ENDPOINTS?.dev?.PRODUCT_MODULE?.fetchProduct,
        data: id,
      };
      const response = await getCall(params);
      console.log("Response in products description page", response);
    };
    fetchData();
  }, []);
  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log("eeeeeeee", product);
    if(!isAddedToCart){
      setIsAddedToCart(true);
      addToCart(product);
    }else{
      navigate('/addToCart');
    }
  };

  useEffect(() => {
    const calculatePrice = async () => {
      const discountedPrice = await priceCalculator(product?.productPrice, product?.productDiscount);
      setPriceAfterDiscount(discountedPrice);
    };

    if (product?.productPrice && product?.productDiscount) {
      calculatePrice();
    }
  }, [product]);
  return (
    <div className="p-1 flex justify-center items-center min-h-screen">
      <div className="flex justify-between mb-8 w-3/4"> {/* Add a width limit like w-3/4 */}
      <div className="flex">
  {/* Product Image Section */}
  <div className="w-1/2 bg-gray-100 p-4 rounded-l-lg shadow-md">
    <div className="mb-6">
      <img
        src={product?.imageURL}
        alt={product?.productName}
        className="w-full max-h-96 object-contain"
      />
    </div>
    <div className="text-lg font-semibold flex justify-normal items-center ml-16">
      <p>{product?.productDescription}</p>
    </div>
  </div>

  {/* Product Details Section */}
  <div className="w-1/2 bg-gray-100 p-4 rounded-r-lg shadow-md">
    <h2 className="text-3xl font-bold mb-6">{product?.productName}</h2>
    <p className={`text-lg font-medium mb-4 p-4 ${product?.productDiscount > 0 ? 'line-through' : ''}`}>
      Price: ₹ {product?.productPrice}
    </p>
    <p
      className="text-lg mb-4 p-4 rounded"
      style={{
        boxShadow: `inset 0px 4px 8px rgba(0, 0, 0, 0.04),
                    inset 0px -4px 8px rgba(0, 0, 0, 0.04),
                    inset 4px 0px 8px rgba(0, 0, 0, 0.04),
                    inset -4px 0px 8px rgba(0, 0, 0, 0.04)`,
      }}
    >
      Discount: {product?.productDiscount} %
    </p>
    <p className="text-lg mb-4">
      {typeof product?.productOffer !== "undefined" &&
        product?.productOffer > 0 &&
        product?.productOffer}
    </p>
    {
      product?.productDiscount > 0 ? <p className="text-lg mb-4 border border-collapse rounded-md p-4" style={{
        boxShadow: `inset 0px 4px 8px rgba(0, 0, 0, 0.04),
                    inset 0px -4px 8px rgba(0, 0, 0, 0.04),
                    inset 4px 0px 8px rgba(0, 0, 0, 0.04),
                    inset -4px 0px 8px rgba(0, 0, 0, 0.04)`,
      }}>Price After Discount : ₹ {priceAfterDiscount}</p> : ''
    }
      
    <p
      className="text-lg mb-4 border border-collapse rounded-md p-4"
      style={{
        boxShadow: `inset 0px 4px 8px rgba(0, 0, 0, 0.04),
                    inset 0px -4px 8px rgba(0, 0, 0, 0.04),
                    inset 4px 0px 8px rgba(0, 0, 0, 0.04),
                    inset -4px 0px 8px rgba(0, 0, 0, 0.04)`,
      }}
    >
      Payment Options: Credit Card, PayPal, Phonepe.
    </p>
    <p
      className="text-lg mb-4 text-green-500 border border-collapse rounded-md p-4 shadow-inner"
      style={{
        boxShadow: `inset 0px 4px 8px rgba(0, 0, 0, 0.04),
                    inset 0px -4px 8px rgba(0, 0, 0, 0.04),
                    inset 4px 0px 8px rgba(0, 0, 0, 0.04),
                    inset -4px 0px 8px rgba(0, 0, 0, 0.04)`,
      }}
    >
      {product?.productStockStatus?.toUpperCase()}
    </p>

    <div className="flex justify-between pt-4">
      <button className="bg-amber-500 border rounded-md border-collapse outline-4 outline-black-400 shadow-md p-4 hover:bg-amber-700 text-black" onClick={handleAddToCart}>
        {isAddedToCart ? 'GO TO CART' : 'ADD TO CART'}
      </button>
      <button className="bg-amber-500 border rounded-md border-collapse outline-4 outline-black-400 shadow-md p-4 hover:bg-amber-700 text-black">
        BUY NOW
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
  
}
