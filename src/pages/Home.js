import React from "react";
import Slide from "../components/Slidebar";
import CardCozinha from "../components/CardCozinha";
import CardDecoracao from "../components/CardDecoracao";
import CardMoveis from "../components/CardMoveis";
import CardVantagens from "../components/CardVantagens";
import CardModa from "../components/CardModa";
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
      <CardDecoracao />
      <CardMoveis />
      <CardVantagens />
      <CardModa />
    </div>
  );
};

export default Home;
