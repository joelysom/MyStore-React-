import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SelectUser.css"; // Arquivo de estilo para os cards de usuário

const SelectUser = () => {
  const [users, setUsers] = useState([]);
  const [accountId, setAccountId] = useState(1); // Supondo que o accountId seja 1, você pode gerenciar de forma dinâmica com autenticação
  const navigate = useNavigate();

  useEffect(() => {
    // Buscar usuários associados à conta
    axios
      .get(`http://localhost:5000/users?accountId=${accountId}`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar usuários:", error);
      });
  }, [accountId]);

  const handleUserSelect = (userId) => {
    // Redireciona para o emulator.js após selecionar o usuário
    navigate("/emulator", { state: { userId } });
  };

  const handleCreateUser = () => {
    // Verificar se o limite de 5 usuários foi atingido
    if (users.length < 5) {
      // Lógica para redirecionar para a criação de usuário (AddUser)
      navigate("/adduser", { state: { accountId } });
    } else {
      alert("Limite de 5 usuários atingido.");
    }
  };

  return (
    <div className="select-user-container">
      <h2>Selecione um Usuário</h2>
      <div className="user-cards">
        {users.map((user) => (
          <div
            key={user.id}
            className="user-card"
            onClick={() => handleUserSelect(user.id)}
          >
            <img src={user.imageUrl || "/default-avatar.png"} alt={user.username} />
            <p>{user.username}</p>
          </div>
        ))}
        {users.length < 5 && (
          <div className="user-card add-card" onClick={handleCreateUser}>
            <img src="/plus.png" alt="Adicionar usuário" />
            <p>Adicionar Usuário</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectUser;
