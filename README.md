# GameVault — Cadastro de Jogos - Lucas Cavichiolo Pereira - Daniel Vinicius Sabino - Gustavo Magalhães 

Projeto acadêmico de aplicação web com Node.js, Express, EJS e MySQL. Permite cadastrar jogos e visualizar os registros em uma tabela.

## Tecnologias
- Node.js e Express
- EJS
- MySQL e mysql2
- HTML e CSS

## Requisitos
Node.js/npm e MySQL instalados.

## Como configurar
1. Crie o banco e a tabela executando `script.sql` no MySQL Workbench (ou outro cliente MySQL).
2. Copie `.env.example` e renomeie a cópia para `.env`.
3. Edite o `.env` e informe a senha e usuário do MySQL.
4. No terminal, dentro da pasta do projeto, instale as dependências:

```bash
npm install
```

5. Inicie a aplicação:

```bash
npm start
```

6. Abra `http://localhost:3000` no navegador.

## Rotas
- `GET /`: lista os registros do banco.
- `POST /itens`: cadastra um jogo e retorna para a lista.

## Campos da tabela
`id`, `nome`, `genero`, `plataforma`, `ano`, `nota`.

## Integrantes
- Preencha com os nomes dos integrantes.

## Disciplina
- Preencha com o nome da disciplina.
