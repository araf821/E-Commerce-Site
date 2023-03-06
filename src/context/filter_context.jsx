import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./products_context";
import reducer from "../reducers/filter_reducer";

const initialStates = {
  products: [],
  filtered_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    free_shipping: false,
  },
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

  const sortBy = (e) => {
    const value = e.target.value;
    dispatch({ type: "SORT_BY", payload: value });
  };

  const filterBy = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "company") {
      value = e.target.textContent;
    }

    dispatch({ type: "FILTER_BY", payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.sort, state.filters]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setListView,
        setGridView,
        sortBy,
        filterBy,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
