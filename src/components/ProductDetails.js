import React from "react";
import "./styles/ProductDetails.css";

const ProductDetails = ({ name, description }) => {
  return (
    <div className="product-details">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetails;
