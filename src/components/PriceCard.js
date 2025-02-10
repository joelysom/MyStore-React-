import React from "react";
import { motion } from "framer-motion";
import "./styles/PriceCard.css";

const PriceCard = ({ oldPrice, newPrice }) => {
  return (
    <motion.div 
      className="price-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="old-price">{oldPrice}</span>
      <span className="new-price">{newPrice}</span>
    </motion.div>
  );
};

export default PriceCard;
