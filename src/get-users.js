const express = require('express');
const router = express.Router();
const db = require('../db');  // Assumindo que o banco de dados está no arquivo 'db.js'

// Rota para obter usuários por accountId
router.get('/:accountId', (req, res) => {
    const { accountId } = req.params;
  
    // Verificando se o accountId está correto
    console.log('accountId recebido:', accountId);
  
    db.all(
      `SELECT username, imageUrl FROM users WHERE account_id = ?`,
      [accountId],
      (err, rows) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Erro ao acessar o banco de dados.' });
        }
  
        if (rows.length === 0) {
          return res.status(404).json({ message: 'Usuários não encontrados para este accountId' });
        }
  
        res.json(rows);
      }
    );
  });

module.exports = router;
