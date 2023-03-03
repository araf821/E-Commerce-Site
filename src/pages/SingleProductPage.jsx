import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import { single_product_url } from "../data";

const SingleProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const fetchProduct = async () => {
    const response = await axios.get(`${single_product_url}${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main className="single-product-page">
      <PageHero pageName={product.name} />
    </main>
  );
};
export default SingleProductPage;
