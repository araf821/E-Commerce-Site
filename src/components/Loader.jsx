import loading from "../assets/loading.svg";

const Loader = () => {
  return (
    <div className="loader section section-center">
      <img src={loading} alt="" />
      <h4>Loading...</h4>
    </div>
  );
};
export default Loader;
