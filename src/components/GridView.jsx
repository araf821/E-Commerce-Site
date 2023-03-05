import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <div className="grid-view">
      <div className="products-container">
        {products.map((item) => {
          const { id, image, name, price } = item;
          return (
            <Product key={id} id={id} image={image} name={name} price={price} />
          );
        })}
      </div>
    </div>
  );
};
export default GridView;
