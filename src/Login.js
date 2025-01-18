import React, { useState } from "react";
import axios from "axios"; // Importando axios
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");  // Renomeando para email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,  // Enviando email
        password,
      });

      if (response.status === 200) {
        onLogin(); // Chama o callback de login bem-sucedido
      }
    } catch (err) {
      setError("Usuário ou senha incorretos.");
    }
  };

  return (
    <div className="login-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/loginbg.mp4" type="video/mp4" />
      </video>
      <audio autoPlay loop>
        <source src="/popular.mp3" type="audio/mp3" />
      </audio>
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="email"  // Alterando para 'email' para validação
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default Login;
