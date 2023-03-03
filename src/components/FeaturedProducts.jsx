import { Link } from "react-router-dom";
import { useProductContext } from "../context/products_context";
import Loader from "./Loader";

const FeaturedProducts = () => {
  const { products_loading, products_error, featured_products } =
    useProductContext();

  if (products_loading === true) {
    return <Loader />;
  }

  return (
    <section className="section featured-section">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center products">Featured Products</div>
      <Link to="/products" className="btn">
        All Products
      </Link>
    </section>
  );
};
export default FeaturedProducts;
