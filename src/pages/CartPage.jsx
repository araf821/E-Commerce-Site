import CartContent from "../components/CartContent";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import PageHero from "../components/PageHero";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <main className="page-full empty-cart">
        {/* <PageHero pageName="Cart" /> */}
        <div>
          <FaShoppingCart />
          <h2>Your cart is empty.</h2>
          <Link to="/products" className="btn">
            Fill it!
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageHero pageName="Cart" />
      <section className="page section-center">
        <CartContent />
      </section>
    </main>
  );
};
export default Cart;
