import React, { useState, createContext, useContext } from "react";

export const AddToCartContext = createContext(null);
export const useAddToCartContext = () => useContext(AddToCartContext);

export const AddToCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Add item to cart
  const addToCart = (currentAlbum, size) => {
    const newItem = {
      currentAlbum,
      size,
    };
    setCart((oldItems) => [...oldItems, newItem]);
  };

  console.log(cart);

  return (
    <AddToCartContext.Provider value={{ cart, addToCart }}>
      {children}
    </AddToCartContext.Provider>
  );
};

export default AddToCartProvider;
