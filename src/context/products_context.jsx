import { createContext, useContext } from "react";

const url = "https://course-api.com/react-store-products";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>
  );
};

// Custom hook
export const useProductContext = () => {
  return useContext(ProductsContext);
};
