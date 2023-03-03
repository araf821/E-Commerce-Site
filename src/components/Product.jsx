import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ id, image, name, price }) => {
  const formatPrice = () => {

  };

  return (
    <section className="product">
      <div className="img-container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`}>
          <FaSearch />
        </Link>
      </div>
      <div className="product-footer">
        <h5>{name}</h5>
        <p>{price}</p>
      </div>
    </section>
  );
};
export default Product;
