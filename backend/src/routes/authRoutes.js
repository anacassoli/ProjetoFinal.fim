 // Importa o Express, framework usado para criar servidor e rotas HTTP
const express = require("express");


/*CRIAÇÃO DO ROUTER*/
// O Router permite separar rotas em arquivos diferentes
// Isso deixa o projeto mais organizado e escalável
const router = express.Router();


/*IMPORTAÇÃO DO CONTROLLER*/
// Importa o controller responsável pela lógica de autenticação
// O controller contém a regra de negócio (verificar usuário, gerar token etc.)
const AuthController = require("../controllers/authController");


/*ROTA DE LOGIN*/
// Rota POST para autenticação do usuário
// Endpoint: /login
// Recebe email e senha e retorna um token JWT se estiver correto
router.post(
"/login",
AuthController.login
);


/*EXPORTAÇÃO DO ROUTER*/
// Exporta o router para ser usado no servidor principal (app.js/server.js)
// Isso permite que o Express reconheça essa rota no sistema
module.exports = router;