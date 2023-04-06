import { Link } from "react-router-dom";
import herobcg from "../assets/hero-bcg.jpeg";
import herobcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <section className="hero section-center">
      <article>
        <h1 >
          Design Your
          <br /> Comfort Zone
        </h1>
        <p>
          Airedale hard cheese mozzarella. Pecorino melted cheese port-salut
          emmental babybel cheese and wine melted cheese manchego. Everyone
          loves blue castello everyone loves fromage cheese slices airedale
          cheddar cream cheese.
        </p>
        <Link to="/products" className="btn">
          Shop Now
        </Link>
      </article>
      <div className="img-container">
        <img src={herobcg} alt="background" className="img1" />
        <img src={herobcg2} alt="background" className="img2" />
      </div>
    </section>
  );
};
export default Hero;
