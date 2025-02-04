import React from "react";
import "./CardMoveis.css";

const produtos = [
  {
    id: 1,
    nome: "Fogão 4 Bocas",
    imagem: "/images/fogao1.jpg",
    descricao: "Fogão 4 bocas com acendimento automático.",
    preco: "R$ 799,00",
  },
  {
    id: 2,
    nome: "Fogão 5 Bocas",
    imagem: "/images/fogao2.jpg",
    descricao: "Design moderno, acendimento automático.",
    preco: "R$ 1.299,00",
  },
  {
    id: 3,
    nome: "Micro-ondas 30L",
    imagem: "/images/microondas.jpg",
    descricao: "Micro-ondas com diversas funções e painel touch.",
    preco: "R$ 699,00",
  },
  {
    id: 4,
    nome: "Forno Elétrico",
    imagem: "/images/forno.jpg",
    descricao: "Forno elétrico 50L com timer e grill.",
    preco: "R$ 1.099,00",
  },
  {
    id: 5,
    nome: "Geladeira Frost Free",
    imagem: "/images/geladeira.jpg",
    descricao: "Geladeira moderna, consumo eficiente de energia.",
    preco: "R$ 2.999,00",
  },
];

const CardMoveis = () => {
  return (
    <div className="card-moveis-container">
      <h2 className="titulo">🔥 Mais Procurados em Fogões e Cozinha</h2>
      <div className="card-grid">
        {produtos.map((movel) => (
          <div className="card" key={movel.id}>
            <img src={movel.imagem} alt={movel.nome} className="card-imagem" />
            <div className="card-info">
              <h3 className="card-nome">{movel.nome}</h3>
              <p className="card-descricao">{movel.descricao}</p>
              <p className="card-preco">{movel.preco}</p>
              <button className="card-botao">Comprar Agora</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMoveis;