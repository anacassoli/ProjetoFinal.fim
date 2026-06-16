 // Importa o Express, framework usado para criar servidor e rotas HTTP
const express = require("express");


/*CRIAÇÃO DO ROUTER*/
// Router = responsável por organizar as rotas separadamente do servidor principal
const router = express.Router();


/*IMPORTAÇÃO DO CONTROLLER*/
// Controller contém a lógica das questões
// Ex: buscar no banco, filtrar por tema, ano, vestibular etc.
const Controller = require("../controllers/questoesController");


/*IMPORTAÇÃO DO MIDDLEWARE DE AUTENTICAÇÃO*/
// Middleware que verifica se o usuário está autenticado
// Ele impede acesso às rotas sem token válido
const { verificarToken } = require("../middleware/authMiddleware");


// LISTAR TODAS AS QUESTÕES
// Retorna todas as questões do banco de dados
router.get(
  "/",
  verificarToken,
  Controller.listarTodas
);


// BUSCAR POR TEMA
// Exemplo: /buscar/tema/matematica
// Retorna questões filtradas por tema
router.get(
"/buscar/tema/:tema",
verificarToken,
Controller.buscarPorTema
);


// BUSCAR POR ANO
// Exemplo: /buscar/ano/2023
// Retorna questões do ano informado
router.get(
"/buscar/ano/:ano",
verificarToken,
Controller.buscarPorAno
);


// BUSCAR POR VESTIBULAR
// Exemplo: /buscar/vestibular/enem
// Retorna questões do vestibular informado
router.get(
"/buscar/vestibular/:vestibular",
verificarToken,
Controller.buscarPorVestibular
);



// Exporta o conjunto de rotas para ser usado no servidor principal
// Ex: app.use("/questoes", router)
module.exports = router;