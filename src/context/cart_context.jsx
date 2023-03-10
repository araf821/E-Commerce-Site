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

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: id });
  };

  // The type represents a string of either increase or decrease
  const editItemAmount = (id, type) => {
    dispatch({ type: "EDIT_ITEM_AMOUNT", payload: { id, type } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Save current cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: "UPDATE_CART_TOTAL" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, editItemAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
