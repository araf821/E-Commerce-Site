const Contact = () => {
  return (
    <div className="contact-section">
      <section className="section section-center">
        <h3>Join our newsletter and get 90% off everything!</h3>
        <p>
          Next level tbh everyday carry, blog copper mug forage kitsch roof
          party pickled hammock kale chips tofu.
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" name="email" placeholder="bebicat@gamil.com" />
          <button>Subscribe</button>
        </form>
      </section>
    </div>
  );
};
export default Contact;
