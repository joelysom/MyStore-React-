import React from "react";
import "./CardMoveis.css";

const moveis = [
  {
    id: 1,
    nome: "Sofá Retrátil",
    imagem: "/images/sofa.jpg",
    descricao: "Sofá confortável com assentos retráteis e reclináveis.",
    preco: "R$ 902,00",
  },
  {
    id: 2,
    nome: "Mesa de Jantar",
    imagem: "/images/mesa.jpg",
    descricao: "Mesa de jantar de vidro com design elegante.",
    preco: "R$ 899,00",
  },
  {
    id: 3,
    nome: "Cadeira Estofada",
    imagem: "/images/cadeira.jpg",
    descricao: "Cadeira confortável com estofado premium.",
    preco: "R$ 299,00",
  },
  {
    id: 4,
    nome: "Guarda-Roupa 6 Portas",
    imagem: "/images/guarda-roupa.jpg",
    descricao: "Guarda-roupa espaçoso com design moderno.",
    preco: "R$ 172,00",
  },
  {
    id: 5,
    nome: "Escrivaninha",
    imagem: "/images/escrivaninha.jpg",
    descricao: "Escrivaninha funcional com gavetas e amplo espaço.",
    preco: "R$ 599,00",
  },
];

const CardMoveis = () => {
  return (
    <div className="card-moveis-container">
      <h2 className="titulo">🛋️ Móveis para sua Casa</h2>
      <div className="card-grid">
        {moveis.map((movel) => (
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