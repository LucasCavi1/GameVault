
const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async (req, res, next) => {
  try {
    const [jogos] = await db.query('SELECT * FROM itens ORDER BY id DESC');
    res.render('index', { jogos, erro: null });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

