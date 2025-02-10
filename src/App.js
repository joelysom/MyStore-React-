import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Produto1 from "./pages/Produto1"; // Importa a página Produto1
import CadastroLogin from "./pages/CadastroLogin";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/produto" element={<Produto1 />} /> {/* Página do produto */}
          <Route path="/PaginaAuth" element={<CadastroLogin />} /> {/* Página de Autenticação */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
