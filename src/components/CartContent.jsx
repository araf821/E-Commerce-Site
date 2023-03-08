import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import CartSummary from "./CartSummary";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <main className="section-center">
      <div className="column-headings">
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
        <hr />
      </div>

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
