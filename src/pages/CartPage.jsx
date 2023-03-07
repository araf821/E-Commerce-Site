import CartContent from "../components/CartContent";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import PageHero from "../components/PageHero";

const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <main className="page-full">
        {/* <PageHero pageName="Cart" /> */}
        <div>
          <h2>Your cart is empty.</h2>
          <Link to="/products">Fill it!</Link>
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
