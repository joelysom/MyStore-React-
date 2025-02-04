import React from "react";
import "./CardDecoracao.css";

const decoracoes = [
  {
    id: 1,
    nome: "Vaso de Cerâmica",
    imagem: "/images/vaso.jpg",
    descricao: "Vaso artesanal de cerâmica para flores e decoração.",
    preco: "R$ 129,00",
  },
  {
    id: 2,
    nome: "Quadro Abstrato",
    imagem: "/images/quadro.jpg",
    descricao: "Quadro decorativo com arte abstrata moderna.",
    preco: "R$ 249,00",
  },
  {
    id: 3,
    nome: "Luminária de Mesa",
    imagem: "/images/luminaria.jpg",
    descricao: "Luminária Estilo Antigo com design sofisticado para ambientes aconchegantes.",
    preco: "R$ 199,00",
  },
  {
    id: 4,
    nome: "Espelho Decorativo",
    imagem: "/images/espelho.jpg",
    descricao: "Espelho Retangular com moldura dourada elegante.",
    preco: "R$ 349,00",
  },
  {
    id: 5,
    nome: "Tapete Felpudo",
    imagem: "/images/tapete.jpg",
    descricao: "Tapete preto macio e aconchegante para sala ou quarto.",
    preco: "R$ 399,00",
  },
];

const CardDecoracao = () => {
  return (
    <div className="card-decoracao-container">
      <h2 className="titulo">🖼️ Itens de Decoração para sua Casa</h2>
      <div className="card-grid">
        {decoracoes.map((decoracao) => (
          <div className="card" key={decoracao.id}>
            <img src={decoracao.imagem} alt={decoracao.nome} className="card-imagem" />
            <div className="card-info">
              <h3 className="card-nome">{decoracao.nome}</h3>
              <p className="card-descricao">{decoracao.descricao}</p>
              <p className="card-preco">{decoracao.preco}</p>
              <button className="card-botao">Comprar Agora</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDecoracao;