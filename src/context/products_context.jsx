import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";

const url = "https://course-api.com/react-store-products";

const ProductsContext = createContext();

const initialStates = {
  isSidebarOpen: false,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStates);

  const openSidebar = () => {
    dispatch({ type: "SIDEBAR_OPEN" });
  };

  const closeSidebar = () => {
    dispatch({ type: "SIDEBAR_CLOSE" });
  };

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook
export const useProductContext = () => {
  return useContext(ProductsContext);
};
