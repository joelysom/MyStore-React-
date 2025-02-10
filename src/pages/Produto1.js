import React from "react";
import ImageGallery from "../components/ImageGallery";
import PriceCard from "../components/PriceCard";
import ProductDetails from "../components/ProductDetails";
import ChatButton from "../components/ChatButton";
import "./Styles/Produto1.css";

const Produto1 = () => {
  const images = [
    "/img/products/product1/img_0.webp",
    "/img/products/product1/img_1.webp",
    "/img/products/product1/img_2.webp",
    "/img/products/product1/img_3.webp",
    "/img/products/product1/img_4.webp",
    "/img/products/product1/img_5.webp",
    "/img/products/product1/img_6.webp",
  ];

  const product = {
    name: "HYUNDAI I30 2.0 AUT, 145 CV.",
    description:
      "VENDO HYUNDAI I30 2.0 AUT, BANCOS EM COURO, EM ÓTIMO ESTADO DE CONSERVAÇÃO, DIREÇÃO ELÉTRICA, VIDROS ELÉTRICOS NAS 4 PORTAS, SENSOR DE RÉ, REBATIMENTO DE RETROVISORES, DOCUMENTAÇÃO EM DIAS.",
    oldPrice: "R$ 45.300",
    newPrice: "R$ 41.500",
  };

  return (
    <div className="produto-wrapper">
      <div className="produto-container">
        <ImageGallery images={images} />
        <div className="product-info">
          <ProductDetails name={product.name} description={product.description} />
          <PriceCard oldPrice={product.oldPrice} newPrice={product.newPrice} />
          <ChatButton />
        </div>
      </div>
    </div>
  );
};

export default Produto1;
