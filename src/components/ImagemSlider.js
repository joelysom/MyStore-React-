import React, { useState } from 'react';

const ImagemSlider = ({ imagens }) => {
  const [imagemAtual, setImagemAtual] = useState(0);

  const proximaImagem = () => {
    if (imagemAtual < imagens.length - 1) {
      setImagemAtual(imagemAtual + 1);
    } else {
      setImagemAtual(0);
    }
  };

  const imagemAnterior = () => {
    if (imagemAtual > 0) {
      setImagemAtual(imagemAtual - 1);
    } else {
      setImagemAtual(imagens.length - 1);
    }
  };

  return (
    <div className="imagem-slider">
      <div className="imagem-container">
        <img src={imagens[imagemAtual]} alt={`Imagem ${imagemAtual + 1}`} />
      </div>
      <div className="controle-imagem">
        <button onClick={imagemAnterior}>←</button>
        <button onClick={proximaImagem}>→</button>
      </div>
    </div>
  );
};

export default ImagemSlider;
