import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const displayStars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span>
        {stars > index + 1 ? (
          <BsStarFill />
        ) : stars > index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return <main className="star-container">
    <div className="stars">{displayStars}</div>
    <p className="reviews" >({reviews} customer reviews)</p>
  </main>;
};
export default Stars;
