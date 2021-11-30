import React, { useState, createContext, useContext } from "react";

export const SweatpantSizeContext = createContext(null);
export const useSweatpantSizeContext = () => useContext(SweatpantSizeContext);

export const SweatpantsSizeProvider = ({ children }) => {
  const [sweatptantsSize, setSweatpantsSize] = useState("");
  const [isSizeButtonClicked, setIsSizeButtonClicked] = useState(false);

  //getting the value of the size button pressed
  const getSweatpantSize = (event) => {
    setSweatpantsSize(event.target.value);
    event.target.style.backgroundColor = "red";
  };

  console.log(sweatptantsSize);

  return (
    <SweatpantSizeContext.Provider
      value={{ getSweatpantSize, isSizeButtonClicked }}
    >
      {children}
    </SweatpantSizeContext.Provider>
  );
};

export default SweatpantsSizeProvider;
