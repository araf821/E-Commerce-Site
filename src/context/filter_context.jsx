import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./products_context";
import reducer from "../reducers/filter_reducer";

const initialStates = {
  products: [],
  filtered_products: [],
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialStates);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  return <FilterContext.Provider value={{...state}}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
