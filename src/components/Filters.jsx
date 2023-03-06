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

  console.log(companies);
  console.log(categories);
  console.log(colors);

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
        </form>
      </div>
    </main>
  );
};
export default Filters;
