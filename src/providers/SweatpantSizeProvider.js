import React, { useState, createContext, useContext } from "react";

export const SweatpantSizeContext = createContext(null);
export const useSweatpantSizeContext = () => useContext(SweatpantSizeContext);

export const SweatpantsSizeProvider = ({ children }) => {
  const [sweatPantSize, setSweatpantSize] = useState("");

  //getting the value of the size button pressed
  const getSweatpantSize = (event) => {
    setSweatpantSize(event.target.value);
  };

  console.log(sweatPantSize);
  return (
    <SweatpantSizeContext.Provider value={{ getSweatpantSize, sweatPantSize, setSweatpantSize }}>
      {children}
    </SweatpantSizeContext.Provider>
  );
};

export default SweatpantsSizeProvider;
