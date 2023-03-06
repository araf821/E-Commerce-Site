import { useFilterContext } from "../context/filter_context";

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
