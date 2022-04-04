import { createContext, useState } from "react";
const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  return (
    <CarritoContext.Provider value={{}}>{children}</CarritoContext.Provider>
  );
};

export { CarritoProvider };

export default CarritoContext;
