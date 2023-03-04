import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (!products.length) {
    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          paddingTop: "10rem",
        }}
      >
        <h5 style={{ fontSize: "2rem" }}>
          Sorry, no products match the search criteria.
        </h5>
      </div>
    );
  }

  if (!grid_view) {
    return <ListView products={products} />;
  }

  return <GridView products={products}></GridView>;
};
export default ProductList;
