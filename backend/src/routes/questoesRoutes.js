// Importa o Express
const express = require("express");

const router = express.Router();

// Importa controller e middleware
const Controller =
  require("../controllers/questoesController");

const {
  verificarToken
} = require(
  "../middleware/authMiddleware"
);

/* =========================
   ROTAS DAS QUESTÕES
========================= */

// Lista todas as questões
router.get(
  "/",
  verificarToken,
  Controller.listarTodas
);

// Busca por tema
router.get(
  "/buscar/tema/:tema",
  verificarToken,
  Controller.buscarPorTema
);

// Busca por ano
router.get(
  "/buscar/ano/:ano",
  verificarToken,
  Controller.buscarPorAno
);

// Busca por vestibular
router.get(
  "/buscar/vestibular/:vestibular",
  verificarToken,
  Controller.buscarPorVestibular
);

// Exporta as rotas
module.exports = router;