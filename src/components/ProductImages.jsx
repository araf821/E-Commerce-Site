import { useState } from "react";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <main className="product-images" >
      <img src={mainImg.url} alt="main" className="main-img" />
      <div className="bottom-images">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.url}
              alt={image.filename}
              onClick={() => setMainImg(images[index])}
              className={`${image.url === mainImg.url ? "active" : null}`}
            />
          );
        })}
      </div>
    </main>
  );
};
export default ProductImages;
