import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const [selected, setSelected] = useState(colors[0]);

  return (
    <main className="add-to-cart">
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
    </main>
  );
};
export default AddToCart;
