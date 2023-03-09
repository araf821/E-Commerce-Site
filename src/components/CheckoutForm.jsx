import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC);

const CheckoutForm = () => {
  const { cart, total_items, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();

  // For Stripe
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const createPaymentIntent = () => {
    console.log("Payment intent");
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = (event) => {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="checkout-form section section-center">
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          onChange={handleChange}
          options={cardStyle}
        />
        <button disabled={processing || disabled || success}>
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        <p className={success ? "result-message" : "result-message hidden"}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            {" "}
            Stripe dashboard.
          </a>{" "}
          Refresh the page to pay again.
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <Elements stripe={promise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeCheckout;
