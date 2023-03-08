import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils";
import ItemAmount from "./ItemAmount";

const CartItem = ({ item }) => {
  const { removeItem, editItemAmount } = useCartContext();
  const { id, amount, color, image, max, name, price } = item;

  const increase = () => {
    editItemAmount(id, "increase");
  };

  const decrease = () => {
    editItemAmount(id, "decrease");
  };

  return (
    <article className="cart-item">
      <div className="item-container">
        <img src={image} alt={name} />
        <h5>{name}</h5>
        <p>
          Color: <span style={{ color: `${color}` }}>color</span>
        </p>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <ItemAmount increase={increase} decrease={decrease} amount={amount} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button className="remove-btn" onClick={() => removeItem(id)}>
        Remove
      </button>
    </article>
  );
};
export default CartItem;
