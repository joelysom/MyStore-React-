import React from "react";
import "./CardModa.css";

const moda = [
  {
    id: 1,
    nome: "Jaqueta de Couro",
    imagem: "/images/jaqueta.jpg",
    descricao: "Jaqueta de couro sintético estilosa e confortável.",
    preco: "R$ 299,00",
  },
  {
    id: 2,
    nome: "Calça Jeans Skinny",
    imagem: "/images/calca.jpg",
    descricao: "Calça jeans skinny de alta qualidade e ótimo caimento.",
    preco: "R$ 159,00",
  },
  {
    id: 3,
    nome: "Tênis Casual",
    imagem: "/images/tenis.jpg",
    descricao: "Tênis confortável para o dia a dia e ocasiões casuais.",
    preco: "R$ 249,00",
  },
  {
    id: 4,
    nome: "Vestido Elegante",
    imagem: "/images/vestido.jpg",
    descricao: "Vestido sofisticado para eventos especiais.",
    preco: "R$ 349,00",
  },
  {
    id: 5,
    nome: "Óculos de Sol",
    imagem: "/images/oculos.jpg",
    descricao: "Óculos de sol moderno com proteção UV.",
    preco: "R$ 199,00",
  },
];

const CardModa = () => {
  return (
    <div className="card-moda-container">
      <div className="fundo-cinza">
        <h2 className="titulo">👗 Tendências da Moda</h2>
        <div className="card-grid">
          {moda.map((item) => (
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
    </div>
  );
};

  

export default CardModa;
