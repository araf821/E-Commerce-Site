import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import { useProductContext } from "../context/products_context";
import { single_product_url } from "../data";
import Loader from "../components/Loader";
import Error from "../components/Error";

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

  return (
    <main className="single-product-page">
      <PageHero pageName={item.name} />
      <Link to="/products"></Link>
    </main>
  );
};
export default SingleProductPage;
