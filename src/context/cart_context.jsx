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

  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
