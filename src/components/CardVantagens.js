import React from "react";
import "./CardVantagens.css";

const CardVantagens = () => {
  return (
    <div className="card-vantagens">
      <div className="card-content">
        <h3>Crie sua conta MyStore e aproveite todas as vantagens</h3>
        <p>
          Ganhe <strong>descontos exclusivos</strong>, ofertas personalizadas e acompanhe seus 
          pedidos de forma prática. Faça parte da nossa comunidade e receba novidades 
          antes de todo mundo!
        </p>
        <button className="btn-vantagens">Criar Conta Gratuitamente</button>
      </div>
    </div>
  );
};

export default CardVantagens;
