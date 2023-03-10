import Filters from "../components/Filters";
import PageHero from "../components/PageHero";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";

const Products = () => {
  return (
    <main className="products-page" >
      <PageHero pageName="Products" />
      <div className="page">
        <section className="products section-center">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </section>
      </div>
    </main>
  );
};
export default Products;
