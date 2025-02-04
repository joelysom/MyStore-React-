import React from "react";
import "./CardDecoracao.css";

const automoveis = [
  {
    id: 1,
    nome: "Carro Sedan",
    imagem: "/images/carro.jpg",
    descricao: "Carro sedan confortável e econômico, ideal para viagens.",
    preco: "R$ 18.000,00",
  },
  {
    id: 2,
    nome: "Moto Esportiva",
    imagem: "/images/moto.jpg",
    descricao: "Moto esportiva potente e ágil para quem ama velocidade.",
    preco: "R$ 45.000,00",
  },
  {
    id: 3,
    nome: "Pneus de Alto Desempenho",
    imagem: "/images/pneus.jpg",
    descricao: "Pneus de alta performance para maior aderência e segurança.",
    preco: "R$ 1.200,00",
  },
  {
    id: 4,
    nome: "Kit Multimídia",
    imagem: "/images/multimidia.jpg",
    descricao: "Sistema multimídia moderno com touchscreen e Bluetooth.",
    preco: "R$ 598,99",
  },
  {
    id: 5,
    nome: "Capacete Esportivo",
    imagem: "/images/capacete.jpg",
    descricao: "Capacete aerodinâmico para proteção e estilo na estrada.",
    preco: "R$ 699,00",
  },
];

const CardAutomoveis = () => {
  return (
    <div className="card-automoveis-container">
      <h2 className="titulo">🚗🔥 Acessórios e Veículos</h2>
      <div className="card-grid">
        {automoveis.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.imagem} alt={item.nome} className="card-imagem" />
            <div className="card-info">
              <h3 className="card-nome">{item.nome}</h3>
              <p className="card-descricao">{item.descricao}</p>
              <p className="card-preco">{item.preco}</p>
              <button className="card-botao">Comprar Agora</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardAutomoveis;