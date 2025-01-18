const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint de registro de usuário
app.post("/register", (req, res) => {
  const { name, password, birthdate, email, plan, nostalgia } = req.body;

  // Verificar se o número de usuários para a conta já chegou ao limite de 5
  const checkUsersQuery = `SELECT COUNT(*) AS userCount FROM users WHERE email = ?`;
  db.get(checkUsersQuery, [email], (err, row) => {
    if (err) {
      return res.status(500).send("Erro ao verificar o número de usuários.");
    }

    if (row.userCount >= 5) {
      return res.status(400).send("Limite de usuários atingido para essa conta.");
    }

    // Inserir um novo usuário
    const query = `INSERT INTO users (name, password, birthdate, email, plan, nostalgia) VALUES (?, ?, ?, ?, ?, ?)`;
    db.run(query, [name, password, birthdate, email, plan, nostalgia], (err) => {
      if (err) {
        res.status(500).send("Erro ao salvar no banco de dados.");
      } else {
        res.status(200).send("Cadastro realizado com sucesso!");
      }
    });
  });
});

// Endpoint de login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Consultando o banco de dados para verificar se as credenciais estão corretas
  const query = `SELECT * FROM users WHERE name = ? AND password = ?`;

  db.get(query, [username, password], (err, row) => {
    if (err) {
      res.status(500).send("Erro ao verificar usuário.");
    } else if (row) {
      res.status(200).send("Login bem-sucedido!");
    } else {
      res.status(400).send("Usuário ou senha incorretos.");
    }
  });
});

// Endpoint para obter usuários
app.get("/users", (req, res) => {
  const { email } = req.query; // Obter o e-mail para identificar a conta

  const query = `SELECT * FROM users WHERE email = ?`;
  db.all(query, [email], (err, rows) => {
    if (err) {
      res.status(500).send("Erro ao buscar usuários.");
    } else {
      res.status(200).json(rows);
    }
  });
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000.");
});
