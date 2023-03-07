const filter_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    let maxPrice = action.payload.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
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

  if (action.type === "FILTER_BY") {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === "FILTER_PRODUCTS") {
    const { products } = state;
    const { text, company, category, color, price, free_shipping } =
      state.filters;
    let tempProducts = [...products];

    if (text) {
      tempProducts = tempProducts.filter((item) => {
        return item.name.toLowerCase().startsWith(text);
      });
    }

    if (company !== "all") {
      tempProducts = tempProducts.filter((item) => {
        return item.company.toLowerCase() === company;
      });
    }

    if (category !== "all") {
      tempProducts = tempProducts.filter((item) => {
        return item.category.toLowerCase() === category;
      });
    }

    if (color !== "all") {
      tempProducts = tempProducts.filter((item) => {
        return item.colors.find((itemColour) => itemColour === color);
      });
    }

    if (free_shipping) {
      tempProducts = tempProducts.filter((item) => {
        return item.shipping === true;
      });
    }

    // Filtering by price:
    tempProducts = tempProducts.filter((item) => {
      return item.price <= price;
    });

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: state.filters.max_price,
        free_shipping: false,
      },
    };
  }

  return state;
};

export default filter_reducer;
