import { createContext, useContext, useReducer } from "react";
import cart_reducer from "../reducers/cart_reducer";

const CartContext = createContext();

const initialStates = {
  cart: [],
  total_items: 0,
  order_total: 0,
  shipping_fee: 699,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialStates);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
