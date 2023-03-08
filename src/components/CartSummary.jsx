import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils";

const CartSummary = () => {
  const { order_total, shipping_fee } = useCartContext();

  return (
    <main>
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
        <Link to="/checkout">Checkout</Link>
      </div>
    </main>
  );
};
export default CartSummary;
