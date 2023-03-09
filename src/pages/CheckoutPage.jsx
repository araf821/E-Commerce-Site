import StripeCheckout from "../components/CheckoutForm";
import PageHero from "../components/PageHero";

const Checkout = () => {
  return (
    <main className="page-full">
      <PageHero pageName="Checkout" />
      <div className="checkout-page">
        <StripeCheckout />
      </div>
    </main>
  );
};
export default Checkout;
