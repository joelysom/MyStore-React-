import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importe Link do react-router-dom
import "./Navbar.css";

const Navbar = () => {
  const [selectedState, setSelectedState] = useState("PE");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const states = ["PE", "SP", "RJ", "BH", "MG", "RS", "SC"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="logo">
          <img src="/icons/icon.png" alt="Logo" />

          {/* Imagem com Link para direcionar para "/" */}
          <Link to="/">
            <img src="/icons/icon2.png" alt="MyStore" />
          </Link>
        </div>

        {/* BARRA DE PESQUISA */}
        <div className="search-bar">
          <img src="/icons/search.png" alt="Buscar" className="search-icon" />
          <input type="text" placeholder="Buscar produtos..." />

          {/* Dropdown de Estados */}
          <div className="location" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src="/icons/location.png" alt="Localização" />
            <span>{selectedState} ▼</span>

            {dropdownOpen && (
              <div className="dropdown">
                {states.map((state) => (
                  <div
                    key={state}
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedState(state);
                      setDropdownOpen(false);
                    }}
                  >
                    {state}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ÍCONES */}
        <div className="icons">
          {/* Ícone do Chat - Redireciona para WhatsApp */}
          <a href="https://api.whatsapp.com/send?phone=5581988872515" target="_blank" rel="noopener noreferrer">
            <div className="icon-item">
              <img src="/icons/chat.png" alt="CHAT" />
              <span>CHAT</span>
            </div>
          </a>

          {/* Outros Ícones */}
          {[{ img: "/icons/notification.png", label: "NOTIFICAÇÕES" }, { img: "/icons/ads.png", label: "MEUS ANÚNCIOS" }, { img: "/icons/orders.png", label: "MEUS PEDIDOS" }].map((item, index) => (
            <div key={index} className="icon-item">
              <img src={item.img} alt={item.label} />
              <span>{item.label}</span>
            </div>
          ))}

          {/* Ícone de Login - Redireciona para "/PaginaAuth" */}
          <Link to="/PaginaAuth">
            <div className="icon-item">
              <img src="/icons/login.png" alt="ENTRAR" />
              <span>ENTRAR</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
