import React, { useState, createContext, useContext } from "react";

export const AddToCartContext = createContext(null);
export const useAddToCartContext = () => useContext(AddToCartContext);

export const AddToCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(60);

  //Add item to cart
  const addToCart = (cart, price, size, type) => {
    const newItem = {
      cart,
      price,
      size,
      type,
    };
    setCart((oldItems) => [...oldItems, newItem]);
  };

  return (
    <AddToCartContext.Provider value={{ cart, addToCart }}>
      {children}
    </AddToCartContext.Provider>
  );
};

export default AddToCartProvider;
