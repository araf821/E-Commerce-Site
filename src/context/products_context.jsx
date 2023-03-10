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
  item_loading: false,
  item_error: false,
  item: {},
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

  const fetchItem = async (url) => {
    dispatch({ type: "GET_ITEM_START" });
    try {
      const response = await axios.get(url);
      const item = response.data;
      dispatch({ type: "GET_ITEM_SUCCESS", payload: item });
    } catch (error) {
      dispatch({ type: "GET_ITEM_ERROR" });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchItem }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook
export const useProductContext = () => {
  return useContext(ProductsContext);
};
