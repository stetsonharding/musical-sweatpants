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
  const removeCartItem = (deletedItem) => {
    setCart((prevItems) =>
      prevItems.filter(
        (item) => item.currentAlbum.artistName !== deletedItem.artistName
      )
    );
  };

  return (
    <AddToCartContext.Provider value={{ cart, addToCart, removeCartItem }}>
      {children}
    </AddToCartContext.Provider>
  );
};

export default AddToCartProvider;
