const cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, product } = action.payload;
    
    // To determine if the item already exists in our cart:
    const tempItem = state.cart.find((item) => item.id === id + color);

    if (tempItem) {
      // If item exists, then we check if the item is of the same color or not.
      const tempCart = state.cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      // If the item doesn't already exist in the cart:
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  return { ...state };
};
export default cart_reducer;
