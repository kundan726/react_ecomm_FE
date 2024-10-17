import React from "react";
import { createContext,useContext,useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems,setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems((prevItem) => [...prevItem,product]
        )
    }

    return (
        <CartContext.Provider value={{cartItems,setCartItems,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = ()=>  {
    return useContext(CartContext);
}

