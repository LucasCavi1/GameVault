const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const itensRouter = require('./routes/itens');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/itens', itensRouter);

app.use((req, res) => res.status(404).render('error', { message: 'Página não encontrada', error: {} }));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render('error', { message: 'Ocorreu um erro no servidor. Confira a conexão com o banco.', error: {} });
});
module.exports = app;
