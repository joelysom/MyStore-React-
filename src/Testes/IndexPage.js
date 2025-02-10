import React from "react";
import "./styles.css";

const HondaListing = () => {
  return (
    <div className="container">
      <h1>HONDA LX 1.4 FLEX 8V/16V 5P AUT. 2014</h1>
      <img 
        src="https://img.olx.com.br/images/94/943590242801494.jpg" 
        alt="HONDA LX 1.4"
        className="car-image"
      />
      <div className="details">
        <p><strong>Preço:</strong> R$ 52.990</p>
        <p><strong>Quilometragem:</strong> 124.000 km</p>
        <p><strong>Combustível:</strong> Flex</p>
        <p><strong>Câmbio:</strong> Automático</p>
        <p><strong>Direção:</strong> Elétrica</p>
        <p><strong>Opcionais:</strong> Air Bag, Ar Condicionado, Alarme, GPS, Bluetooth</p>
        <p><strong>Contato:</strong> Renata Alves - (81) 99192-9091</p>
      </div>
      <a
        href="https://pe.olx.com.br/grande-recife/autos-e-pecas/carros-vans-e-utilitarios/fit-1-4-lx-flex-automatico-2014-excelente-estado-1371359071"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
      >
        Ver anúncio completo
      </a>
    </div>
  );
};

export default HondaListing;
