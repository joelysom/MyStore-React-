const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./users.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message);
  } else {
    console.log("Conectado ao banco de dados SQLite.");
  }
});

// Criando a tabela de contas, se não existir
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS accounts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      password TEXT NOT NULL,
      birthdate TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      plan TEXT NOT NULL,
      nostalgia TEXT
    )`
  );
  
  // Criando a tabela de usuários, se não existir
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      account_id INTEGER,
      username TEXT NOT NULL,
      imageUrl TEXT,
      FOREIGN KEY (account_id) REFERENCES accounts(id)
    )`
  );
});

module.exports = db;
