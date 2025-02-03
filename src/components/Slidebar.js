import React, { useState, useEffect } from "react";
import "./Slide.css";

const images = [
  "/images/banner1.png",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
];

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <div className="slider-container">
        <button className="prev" onClick={prevSlide} aria-label="Previous Slide">{"<"}</button>
        <img
          src={images[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className="slider-img"
        />
        <button className="next" onClick={nextSlide} aria-label="Next Slide">{">"}</button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;
