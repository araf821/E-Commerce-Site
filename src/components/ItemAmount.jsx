import { FaMinus, FaPlus } from "react-icons/fa";

const ItemAmount = ({increase, decrease, amount}) => {
  return (
    <div className="amount-selector-container" >
        <button onClick={decrease} >
            <FaMinus/>
        </button>
        <h2 className="item-amount" >{amount}</h2>
        <button onClick={increase} >
            <FaPlus/>
        </button>
    </div>
  );
};
export default ItemAmount;
