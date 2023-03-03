import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xleknwpy");

  if (state.succeeded) {
    return <div className="contact-section">
    <section className="submitted-form section section-center">
      <h4>Form Received</h4>
      <h3>Thanks for subscribing to our newsletter!</h3>
    </section>
  </div>;
  }

  return (
    <div className="contact-section">
      <section className="section section-center">
        <h3>Join our newsletter and get 90% off everything!</h3>
        <p>
          Next level tbh everyday carry, blog copper mug forage kitsch roof
          party pickled hammock kale chips tofu.
        </p>
        <form
        action="https://formspree.io/f/xleknwpy"
        onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="bebicat@gmail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <button type="submit" disabled={state.submitting}>
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};
export default Contact;
