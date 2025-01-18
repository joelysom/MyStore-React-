import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios"; // Importando axios
import "./App.css";
import Emulator from "./emulator"; // Importando o componente do emulador
import Cadastro from "./Cadastro"; // Importando o componente de cadastro

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      if (response.status === 200) {
        navigate("/emulator"); // Redireciona para a página do emulador
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
    navigate("/cadastro"); // Redireciona para a página de cadastro
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
          value={username}
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
        <Route path="/emulator" element={<Emulator />} /> {/* Rota para a página do emulador */}
        <Route path="/cadastro" element={<Cadastro />} /> {/* Rota para a página de cadastro */}
      </Routes>
    </Router>
  );
};

export default App;
