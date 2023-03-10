import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (!products.length) {
    return (
      <div className="no-products" >
        <h5 >Sorry, no products match the search criteria.</h5>
      </div>
    );
  }

  if (!grid_view) {
    return <ListView products={products} />;
  }

  return <GridView products={products}></GridView>;
};
export default ProductList;
