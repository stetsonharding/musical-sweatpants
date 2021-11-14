import React, { useContext, createContext } from "react";
import axios from "axios";

const getApi = (path) => {
  const response = axios.get(path);
  return response;
};

const buildQueryString = (obj) => {
  let newString = "";

  for (const [key, value] of Object.entries(obj)) {
    // check if value is an array, and loop over it
    newString = newString + `${key}=${value}&`;
  }

  return newString.slice(0, -1);
};

export const ApiContext = createContext(null);
export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  return (
    <ApiContext.Provider value={[getApi, buildQueryString]}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
