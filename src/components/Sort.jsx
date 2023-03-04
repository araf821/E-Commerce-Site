import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  return (
    <main className="sort-bar">
      <div className="btn-container">
        <button className={`${grid_view ? "active" : null}`}>
          <BsFillGridFill />
        </button>
        <button className={`${!grid_view ? "active" : null}`}>
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">Sort By</label>
        <select name="sort" id="sort" className="sort-input">
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </main>
  );
};
export default Sort;
