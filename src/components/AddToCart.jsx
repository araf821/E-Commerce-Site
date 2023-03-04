import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import ItemAmount from "./ItemAmount";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const [selected, setSelected] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    amount < stock && setAmount(amount + 1);

  };

  const decrease = () => {
    amount > 1 && setAmount(amount - 1);
  };

  return (
    <main className="add-to-cart">
      <hr />
      <div className="color-container">
        <span>Colors: </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                style={{ backgroundColor: color }}
                key={index}
                className={`${
                  color === selected ? "color-btn active" : "color-btn"
                }`}
                onClick={() => setSelected(color)}
              >
                {color === selected ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="amount-container">
        <ItemAmount increase={increase} decrease={decrease} amount={amount} />
      </div>
      
      <Link to="/cart">Add to Cart</Link>
    </main>
  );
};
export default AddToCart;
