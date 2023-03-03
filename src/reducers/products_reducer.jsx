const products_reducer = (state, action) => {
  if (action.type === "SIDEBAR_OPEN") {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === "SIDEBAR_CLOSE") {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === "GET_PRODUCTS_START") {
    return { ...state, products_loading: true };
  }
  if (action.type === "GET_PRODUCTS_ERROR") {
    return { ...state, products_error: true, products_loading: false };
  }
  if (action.type === "GET_PRODUCTS_SUCCESS") {
    const featured = action.payload.filter((item) => item.featured);

    console.log(featured);
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products: featured,
    };
  }

  return state;
};
export default products_reducer;
