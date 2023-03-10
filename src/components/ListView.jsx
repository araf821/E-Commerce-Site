import { Link } from "react-router-dom";
import { formatPrice } from "../utils";

const ListView = ({ products }) => {
  return (
    <main className="list-view">
      {products.map((item) => {
        const { id, image, name, price, description } = item;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>
                <span>{name}</span>
              </h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </main>
  );
};
export default ListView;
