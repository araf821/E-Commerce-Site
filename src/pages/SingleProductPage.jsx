import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import { useProductContext } from "../context/products_context";
import { single_product_url } from "../data";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { formatPrice } from "../utils";
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";

const SingleProductPage = () => {
  const { item_loading, item_error, item, fetchItem } = useProductContext();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchItem(`${single_product_url}${id}`);
  }, [id]);

  // Redirect the user back home if they come across a product that does not exist.
  useEffect(() => {
    if (item_error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [item_error]);

  if (item_loading) {
    return <Loader />;
  }

  if (item_error) {
    return <Error />;
  }

  const { name, price, description, images, stock, stars, reviews, company } =
    item;

  return (
    <main className="single-product-page">
      <PageHero pageName={item.name} />
      <section className="section page section-center">
        <Link to="/products">Back to Products</Link>
        <div className="divider">
          <ProductImages images={images} />
          <article className="product-info">
            <h2 className="item-name">
              <span>{name}</span>
            </h2>
            <Stars stars={stars} />
            <p>{reviews} user reviews</p>
            <hr />
            <h4 className="price" >{formatPrice(price)}</h4>
            <p className="desc">{description}</p>
            <h5>
              Availability:
              <span>{stock > 0 ? " In Stock" : " Out of Stock"}</span>
            </h5>
            <h5>
              Brand:
              <span> {company}</span>
            </h5>
            {stock > 0 && <AddToCart />}
          </article>
        </div>
      </section>
    </main>
  );
};
export default SingleProductPage;
