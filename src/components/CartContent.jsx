import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import CartSummary from "./CartSummary";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <main className="section-center">
      {cart.map((item) => {
        return <div>{item.name}</div>;
      })}

      <hr />
      <div className="cart-buttons">
        <Link to="/products">Continue Shopping</Link>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
      <CartSummary />
    </main>
  );
};

export default CartContent;
