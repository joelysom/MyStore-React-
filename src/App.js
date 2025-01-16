import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Emulator from "./emulator"; // Importando o componente do emulador

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleLogin = () => {
    // Verificando se o login é bem-sucedido
    if (username === "admin" && password === "admin") {
      navigate("/emulator"); // Redireciona para a página do emulador
    } else {
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
        <button onClick={handleLogin}>Entrar</button>
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
      </Routes>
    </Router>
  );
};

export default App;
