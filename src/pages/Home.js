import React from "react";
import Slide from "../components/Slidebar";
import CardCozinha from "../components/CardCozinha";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="categories">
        <button>ELETRO</button>
        <button>DECORAÇÃO</button>
        <button>MÓVEIS</button>
        <button>IMÓVEIS</button>
        <button>MODA</button>
        <button>AUTOMÓVEIS</button>
      </div>
      <Slide />
      <CardCozinha />
    </div>
  );
};

export default Home;
