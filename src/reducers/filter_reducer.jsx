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

  if (action.type === 'SORT_BY') {
    return {...state, sort: action.payload}
  }

  return state;
};

export default filter_reducer;
