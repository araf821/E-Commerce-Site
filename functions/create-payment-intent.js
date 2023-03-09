// Access it at domain/.netlify/functions/create-payment-intent
require("dotenv").config;

const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET);

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, order_total, shipping_fee } = JSON.parse(event.body);
    console.log(cart);

    const calculateOrderAmount = () => {
      return shipping_fee + order_total;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd",
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
        // console.log(error)
    }
  }

  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
