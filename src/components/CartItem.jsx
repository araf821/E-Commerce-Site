import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils";
import ItemAmount from "./ItemAmount";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item }) => {
  const { removeItem, editItemAmount } = useCartContext();
  const { id, amount, color, image, max, name, price } = item;

  const increase = () => {
    editItemAmount(id, "increase");
  };

  const decrease = () => {
    editItemAmount(id, "decrease");
  };

  if (true) {
    return (
      <article className="cart-item">
        <div className="main-container">
          <img src={image} alt={name} />
          <div>
            <h5 className="name">{name}</h5>
            <p>
              Color: <span style={{ backgroundColor: `${color}` }}></span>
            </p>
            <h5 className="price-mobile">{formatPrice(price)}</h5>
          </div>
        </div>
        <div className="btn-container">
          <ItemAmount increase={increase} decrease={decrease} amount={amount} />
          <button className="remove-btn" onClick={() => removeItem(id)}>
            <FaTrashAlt />
          </button>
        </div>
        <hr />
      </article>
    );
  }
};
export default CartItem;
