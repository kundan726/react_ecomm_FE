import React from "react";
import { PAGES } from "../../constants/constants";
import { NavLink, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../../context/cartContext";
export default function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const { cartItems } = useCartContext();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    // Cleanup event listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    getDetailsFromToken(token);
  }, [token]);

  const getDetailsFromToken = (token) => {
    try {
      if (token) {
        const decodedTokenContent = jwtDecode(token);
        setRole(decodedTokenContent?.role);
      } else {
        setRole(null);
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    console.log("cartItemmmmmmmmmmmm", cartItems.length);
    cartItemCount(cartItems);
  }, [cartItems]);

  const cartItemCount = (cartItems) => {
    setCartCount(cartItems.length);
  };

  const filteredPages = PAGES.filter((page) => {
    if (page.visibleTo == "all") return true;
    if (Array.isArray(page?.visibleTo)) {
      return role && page?.visibleTo.includes(role);
    }
    return false;
  });

  const finalPages = filteredPages.filter((page) => {
    if (token && (page.name == "LOGIN" || page.name == "SIGNUP")) {
      return false;
    } else {
      return true;
    }
  });

  const logout = () => {
    try {
      localStorage.removeItem("token");
      setToken(null);
      window.dispatchEvent(new Event("storage"));
      navigate("/");
    } catch (error) {
      console.log("Error while logout", error);
    }
  };

  const redirectToCartPage = () => {
    try {
      // console.log("cartItemmmmmmmmmmmm",cartItem.length)
      navigate("/addToCart");
    } catch (error) {
      console.log("Error inside addToCart", error);
      throw error;
    }
  };

  return (
    <div>
      <div className="flex w-full p-2 justify-end bg-amber-900 text-white h-16">
        <ul className="flex space-x-8 p-3 mr-8 cursor-pointer">
          {finalPages.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-black" : "hover:text-black"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
          {token && (
            <>
              <li>
                <button
                  type="button"
                  className="hover:text-black"
                  onClick={logout}
                >
                  LOGOUT
                </button>
              </li>
              <li className="relative">
                <button
                  type="button"
                  className="hover:text-black"
                >
                  <ShoppingCartIcon
                    className="text-white-800"
                    fontSize="large"
                    onClick={redirectToCartPage}
                  />
                  {/* Cart count badge */}
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );  
}
