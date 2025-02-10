import React from "react";
import "./styles/ImageGallery.css";

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      <div className="main-image">
        <img src={images[0]} alt="Produto" loading="lazy" />
      </div>
      <div className="thumbnail-grid">
        {images.slice(1, 5).map((image, index) => (
          <img key={index} src={image} alt={`Thumbnail ${index}`} loading="lazy" />
        ))}
        <div className="more-images">+{images.length - 5}</div>
      </div>
    </div>
  );
};

export default ImageGallery;
