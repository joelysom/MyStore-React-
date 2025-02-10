import React from 'react';

const ProdutoCard = ({ produto }) => {
  return (
    <div className="produto-card">
      <h2>{produto.nome}</h2>
      <p className="preco">{produto.preco}</p>
      <p className="descricao">{produto.descricao}</p>
      <div className="vendedor">
        <span>Vendedor:</span> {produto.nomeVendedor}
      </div>
      <a href={`mailto:${produto.contato}`}>
        <button>Contactar Vendedor</button>
      </a>
    </div>
  );
};

export default ProdutoCard;
