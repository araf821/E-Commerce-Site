import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className=" page-full error">
      <div>
        <h1>404</h1>
        <h2>Sorry, the page you're looking for does not exist.</h2>
        <Link className="btn" to="/">
          Back Home
        </Link>
      </div>
    </section>
  );
};
export default Error;
