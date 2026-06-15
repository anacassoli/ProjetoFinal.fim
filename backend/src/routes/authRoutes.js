// Importa o Express
const express = require("express");

// Cria o roteador
const router = express.Router();

// Importa o controller de autenticação
const AuthController =
  require("../controllers/authController");

/* =========================
   ROTA DE LOGIN
========================= */

router.post(
  "/login",
  AuthController.login
);

// Exporta as rotas
module.exports = router;