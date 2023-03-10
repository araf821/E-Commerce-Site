import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils";
import { useUserContext } from "../context/user_context";

const CartSummary = () => {
  const { order_total, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <main className="cart-summary-component">
      <div>
        <article>
          <h5>
            Subtotal : <span>{formatPrice(order_total)}</span>
          </h5>
          <p>
            Shipping : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            Order Total : <span>{formatPrice(order_total + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout" className="btn">
            Checkout
          </Link>
        ) : (
          <button onClick={loginWithRedirect} className="btn">
            Login
          </button>
        )}
      </div>
    </main>
  );
};
export default CartSummary;
