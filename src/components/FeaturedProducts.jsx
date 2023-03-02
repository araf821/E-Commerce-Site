import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return <section className="section featured-section">
     <div className='title'>
        <h2>Featured Products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center products'>
        Featured Products
      </div>
      <Link to='/products' className='btn'>
        All Products
      </Link>
  </section>;
};
export default FeaturedProducts;
