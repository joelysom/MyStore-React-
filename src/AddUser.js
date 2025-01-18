import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddUser.css"; // Arquivo de estilo para o formulário de criação

const AddUser = ({ accountId }) => {
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Estado para armazenar a URL da imagem selecionada
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Listando as imagens disponíveis
  const availableImages = [
    "users/user_1.png",
    "users/user_2.png",
    "users/user_3.png"
  ];
  const handleCreateUser = async () => {
    if (!imageUrl) {
      setError("Por favor, selecione uma imagem.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/create-user", {
        accountId: accountId, 
        username: username,    
        imageUrl: imageUrl,    
      });
  
      console.log("Usuário criado:", response.data);
      navigate("/SelectUser");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      setError(`Erro: ${error.response?.data?.error || 'Tente novamente.'}`);
    }
  };
  

  return (
    <div className="add-user-container">
      <h2>Criar Novo Usuário</h2>
      <div>
        <input
          type="text"
          placeholder="Nome do usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <p>Escolha uma foto:</p>
        <div className="image-options">
          {availableImages.map((image, index) => (
            <div
              key={index}
              className={`image-option ${imageUrl === image ? "selected" : ""}`}
              onClick={() => setImageUrl(image)}
            >
              <img src={image} alt={`Usuário ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      <button onClick={handleCreateUser}>Criar Usuário</button>
    </div>
  );
};

export default AddUser;
