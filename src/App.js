import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Emulator from "./emulator";
import Cadastro from "./Cadastro";
import SelectUser from "./SelectUser"; // Importando o componente SelectUser
import AddUser from "./AddUser";

const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (response.status === 200) {
        navigate("/selectuser"); // Redireciona para a seleção de usuário
      }
    } catch (err) {
      setError("Usuário ou senha incorretos.");
    }
  };

  const handleAudioPlay = () => {
    const audio = document.getElementById("background-audio");
    if (audio) {
      audio.play();
      setIsAudioPlaying(true);
    }
  };

  const handleCadastroRedirect = () => {
    navigate("/cadastro");
  };

  return (
    <div className="login-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/loginbg.mp4" type="video/mp4" />
      </video>
      <audio id="background-audio" loop>
        <source src="/popular.mp3" type="audio/mp3" />
      </audio>
      {!isAudioPlaying && (
        <button className="play-audio-button" onClick={handleAudioPlay}>
          Reproduzir Música
        </button>
      )}
      <img src="/title.png" alt="Título" className="title-image" />
      <div className="login-box">
        <h2>LOGIN</h2>
        <input
          type="text"
          placeholder="Usuário"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <div className="login-buttons">
          <button onClick={handleLogin}>Entrar</button>
          <button onClick={handleCadastroRedirect}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/selectuser" element={<SelectUser />} /> {/* Nova rota para seleção de usuário */}
        <Route path="/emulator" element={<Emulator />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/adduser" element={<AddUser />} /> {/* Rota para AddUser */}
      </Routes>
    </Router>
  );
};

export default App;
