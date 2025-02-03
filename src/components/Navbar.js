import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [selectedState, setSelectedState] = useState("PE");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const states = ["PE", "SP", "RJ", "BH", "MG", "RS", "SC"];

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/icons/icon.png" alt="Logo" />
        <img src="/icons/icon2.png" alt="MyStore" />
      </div>

      <div className="search-bar">
        <img src="/icons/search.png" alt="Buscar" className="search-icon" />
        <input type="text" placeholder=" " />

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

      <div className="icons">
        <div className="icon-item">
          <img src="/icons/chat.png" alt="Chat" />
          <span>CHAT</span>
        </div>
        <div className="icon-item">
          <img src="/icons/notification.png" alt="Notificações" />
          <span>NOTIFICAÇÕES</span>
        </div>
        <div className="icon-item">
          <img src="/icons/ads.png" alt="Meus Anúncios" />
          <span>MEUS ANÚNCIOS</span>
        </div>
        <div className="icon-item">
          <img src="/icons/orders.png" alt="Meus Pedidos" />
          <span>MEUS PEDIDOS</span>
        </div>
        <div className="icon-item">
          <img src="/icons/login.png" alt="Entrar" />
          <span>ENTRAR</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
