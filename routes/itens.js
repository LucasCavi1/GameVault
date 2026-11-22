
const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', async (req, res, next) => {
  try {
    const { nome, genero, plataforma, ano, nota } = req.body;

    if (!nome || !genero || !plataforma || !ano || !nota) {
      return res.status(400).send('Preencha todos os campos. <a href="/">Voltar</a>');
    }

    const anoNum = Number(ano);
    const notaNum = Number(nota);

    if (!Number.isInteger(anoNum) || anoNum < 1950 || anoNum > 2100 || notaNum < 0 || notaNum > 10) {
      return res.status(400).send('Ano ou nota inválidos. <a href="/">Voltar</a>');
    }

    await db.execute(
      'INSERT INTO itens (nome, genero, plataforma, ano, nota) VALUES (?, ?, ?, ?, ?)',
      [nome.trim(), genero.trim(), plataforma.trim(), anoNum, notaNum]
    );

    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
