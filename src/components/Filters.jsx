import { useFilterContext } from "../context/filter_context";
import { formatPrice, getUniqueValues } from "../utils";

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

  console.log(categories);

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
          <div className="form-control">
            <h5>Company</h5>
            {companies.map((company, index) => {
              return (
                <button key={index} name="company" onClick={filterBy}>
                  {company}
                </button>
              );
            })}
          </div>
          <div className="form-control">
            <h5>Category</h5>
            <select name="category" value={category} onChange={filterBy}>
              {categories.map((cat, index) => {
                return (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-control">
            <h5>Color</h5>
            <div className="colors">
              {colors.map((currentColor, index) => {
                if (currentColor === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={filterBy}
                      data-color="all"
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
                    data-color={currentColor}
                  >
                    color
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Price</h5>
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
          <div className="form-control">
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
      </div>
    </main>
  );
};
export default Filters;
