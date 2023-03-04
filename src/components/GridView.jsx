import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <div className="gridview">
      <div className="products_container">
        {products.map((item) => {
          const { id, image, name, price } = item;
          return <Product id={id} image={image} name={name} price={price} />;
        })}
      </div>
    </div>
  );
};
export default GridView;
