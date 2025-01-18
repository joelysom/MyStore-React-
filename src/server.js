const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { name, password, birthdate, email, plan, nostalgia } = req.body;
  const query = `INSERT INTO users (name, password, birthdate, email, plan, nostalgia) VALUES (?, ?, ?, ?, ?, ?)`;

  db.run(query, [name, password, birthdate, email, plan, nostalgia], (err) => {
    if (err) {
      res.status(500).send("Erro ao salvar no banco de dados.");
    } else {
      res.status(200).send("Cadastro realizado com sucesso!");
    }
  });
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000.");
});

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
  