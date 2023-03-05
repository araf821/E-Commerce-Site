import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./products_context";
import reducer from "../reducers/filter_reducer";

const initialStates = {
  products: [],
  filtered_products: [],
  grid_view: true,
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialStates);

  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setListView, setGridView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
