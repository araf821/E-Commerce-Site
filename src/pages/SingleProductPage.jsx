import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import { useProductContext } from "../context/products_context";
import { single_product_url } from "../data";
import Loader from '../components/Loader'

const SingleProductPage = () => {
  const { item_loading, item_error, item, fetchItem } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    fetchItem(`${single_product_url}${id}`);
  }, [id]);

  if (item_loading) {
    return <Loader />
  }

  if (item_error) {
    
  }

  return (
    <main className="single-product-page">
      <PageHero pageName={item.name} />
      <Link to="/products"></Link>
    </main>
  );
};
export default SingleProductPage;
