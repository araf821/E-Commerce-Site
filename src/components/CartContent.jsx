import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <main className="cart-content-component section-center">
      <div className="column-headings">
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
        <hr />
      </div>

      <hr className="first-hr" />
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}

      <div className="cart-buttons">
        <Link className="btn btn-continue" to="/products">
          Continue Shopping
        </Link>
        <button className="btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <CartSummary />
    </main>
  );
};

export default CartContent;
