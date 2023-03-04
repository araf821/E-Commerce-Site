import loader from "../assets/loading.svg";
import PageHero from "./PageHero";

const Loader = () => {
  return (
    <main>
      <PageHero pageName="Loading" />
      <div className="page-100 loader section section-center">
        <img src={loader} alt="loader component" />
        <h4>Loading...</h4>
      </div>
    </main>
  );
};
export default Loader;
