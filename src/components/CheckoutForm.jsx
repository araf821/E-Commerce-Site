import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils";

const promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC);

const CheckoutForm = () => {
  const { cart, order_total, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  const navigate = useNavigate();

  // For Stripe
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify({
          cart,
          order_total,
          shipping_fee,
        })
      );
      setClientSecret(data.clientSecret);
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: error.message }),
      };
    }
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

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}.`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSuccess(true);
      setTimeout(() => {
        clearCart();
        navigate("/");
      }, 5000);
    }
  };

  return (
    <div className="checkout-form section">
      <section className="checkout-info">
        {success ? (
          <article>
            <h4>Your payment was successful!</h4>
            <h4>Redirecting to home page shortly.</h4>
          </article>
        ) : (
          <article>
            <h4 className="greeting">Hello, {myUser && myUser.name}!</h4>
            <p>
              Your order total is <span>{formatPrice(order_total)}</span>!
            </p>
            <p>
              For testing, use card number 4242 4242 4242 4242 and anything else
              for the rest of the fields.
            </p>
          </article>
        )}
      </section>

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
