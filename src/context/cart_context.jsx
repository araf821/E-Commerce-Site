import { createContext, useContext, useEffect, useReducer } from "react";
import cart_reducer from "../reducers/cart_reducer";

const CartContext = createContext();

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialStates = {
  cart: getLocalStorage(),
  total_items: 0,
  order_total: 0,
  shipping_fee: 699,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialStates);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {};

  const editItemAmount = (id, value) => {};

  const clearCart = () => {};

  // Save current cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
