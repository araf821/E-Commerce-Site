import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils";

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
        </form>
      </div>
    </main>
  );
};
export default Filters;
