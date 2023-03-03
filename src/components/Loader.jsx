import loader from "../assets/loading.svg";

const Loader = () => {
  return (
    <div className="loader section section-center">
      <img src={loader} alt="loader component" />
      <h4>Loading...</h4>
    </div>
  );
};
export default Loader;
