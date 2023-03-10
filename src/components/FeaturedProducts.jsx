import { Link } from "react-router-dom";
import { useProductContext } from "../context/products_context";
import Loader from "./Loader";
import Product from "./Product";

const FeaturedProducts = () => {
  const { products_loading, products_error, featured_products } =
    useProductContext();

  if (products_loading) {
    return <Loader />;
  }

  if (products_error || featured_products.length === 0) {
    return (
      <section className="featured-section">
        <div className="title">
          <h2>Featured Products</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center products">
          <h4 style={{ textAlign: "center" }}>
            Looks like there's been an error! Products could not be found at
            this time.
          </h4>
        </div>
      </section>
    );
  }

  return (
    <section className="section featured-section">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center products">
        {featured_products.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <div className="btn-container">
        <Link to="/products" className="btn">
          All Products
        </Link>
      </div>
    </section>
  );
};
export default FeaturedProducts;
