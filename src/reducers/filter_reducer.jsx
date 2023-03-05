const filter_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    return {
      ...state,
      products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }

  if (action.type === "SET_GRID_VIEW") {
    return { ...state, grid_view: true };
  }

  if (action.type === "SET_LIST_VIEW") {
    return { ...state, grid_view: false };
  }

  if (action.type === "SORT_BY") {
    return { ...state, sort: action.payload };
  }

  if (action.type === "SORT_PRODUCTS") {
    // Get the values of sort and filtered_products states
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((current, next) => {
        return current.price - next.price;
      });
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((current, next) => {
        return next.price - current.price;
      });
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((current, next) => {
        return current.name.localeCompare(next.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((current, next) => {
        return next.name.localeCompare(current.name);
      });
    }

    return { ...state, filtered_products: tempProducts };
  }

  return state;
};

export default filter_reducer;
