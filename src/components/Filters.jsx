import { useFilterContext } from "../context/filter_context";
import { formatPrice, getUniqueValues } from "../utils";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      free_shipping,
    },
    filterBy,
    clearFilters,
    products,
  } = useFilterContext();

  const companies = getUniqueValues(products, "company");
  const categories = getUniqueValues(products, "category");
  const colors = getUniqueValues(products, "colors");

  return (
    <main className="filters-component">
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="search-box"
              value={text}
              onChange={filterBy}
            />
          </div>
          <div className="form-control companies">
            <h5>Company</h5>
            <div className="company-btns">
              {companies.map((comp, index) => {
                return (
                  <button
                    key={index}
                    name="company"
                    onClick={filterBy}
                    className={`${
                      company === comp.toLowerCase() ? "active" : null
                    }`}
                  >
                    {comp}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Category</h5>
            {/* <select
              className="categories"
              name="category"
              value={category}
              onChange={filterBy}
            >
              {categories.map((cat, index) => {
                return (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                );
              })}
            </select> */}
            <div className="category-btns">
              {categories.map((cat, index) => {
                return (
                  <button
                    key={index}
                    name="category"
                    onClick={filterBy}
                    className={`${
                      category === cat.toLowerCase() ? "active" : null
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5 style={{ textAlign: "center" }}>Color</h5>
            <div className="colors">
              {colors.map((currentColor, index) => {
                if (currentColor === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={filterBy}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: currentColor }}
                    onClick={filterBy}
                    className={`${
                      color === currentColor ? "color-btn active" : "color-btn"
                    }`}
                    data-color={currentColor}
                  >
                    {color === currentColor ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5 style={{ textAlign: "center" }}>Price</h5>
            <p>{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              onChange={filterBy}
            />
          </div>
          <div className="form-control shipping-box">
            <label htmlFor="free_shipping">Free Shipping</label>
            <input
              type="checkbox"
              name="free_shipping"
              id="free_shipping"
              onChange={filterBy}
              checked={free_shipping}
            />
          </div>
        </form>
        <button onClick={clearFilters}>Clear Filters</button>
      </div>
    </main>
  );
};
export default Filters;
