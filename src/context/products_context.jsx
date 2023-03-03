import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url } from "../data";

const ProductsContext = createContext();

const initialStates = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStates);

  const openSidebar = () => {
    dispatch({ type: "SIDEBAR_OPEN" });
  };

  const closeSidebar = () => {
    dispatch({ type: "SIDEBAR_CLOSE" });
  };

  const fetchProducts = async () => {
    dispatch({ type: "GET_PRODUCTS_START" });
    try {
      const response = await axios.get(products_url);
      const data = response.data;
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_PRODUCTS_ERROR" });
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
