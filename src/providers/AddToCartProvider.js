import React, { useState, createContext, useContext } from "react";

export const AddToCartContext = createContext(null);
export const useAddToCartContext = () => useContext(AddToCartContext);

export const AddToCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Add item to cart
  const addToCart = (currentAlbum, size, price) => {
    const newItem = {
      currentAlbum,
      size,
      price,
    };
    setCart((oldItems) => [...oldItems, newItem]);
  };

  console.log(cart);
  const removeCartItem = (deletedItem) => {
    setCart((prevItems) =>
      prevItems.filter(
        (item) => item.currentAlbum.collectionId !== deletedItem.collectionId
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