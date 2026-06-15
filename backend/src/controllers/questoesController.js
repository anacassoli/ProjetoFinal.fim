// Importa o model responsável pelas consultas ao banco
const Model = require("../model/questoesModel");

/* =========================
   LISTAR TODAS AS QUESTÕES
========================= */

async function listarTodas(req, res) {
  const data = await Model.listarTodas();
  res.json(data);
}

/* =========================
   BUSCAR POR TEMA
========================= */

async function buscarPorTema(req, res) {
  const data = await Model.buscarPorTema(
    req.params.tema
  );

  res.json(data);
}

/* =========================
   BUSCAR POR ANO
========================= */

async function buscarPorAno(req, res) {
  const data = await Model.buscarPorAno(
    req.params.ano
  );

  res.json(data);
}

/* =========================
   BUSCAR POR VESTIBULAR
========================= */

async function buscarPorVestibular(req, res) {
  const data =
    await Model.buscarPorVestibular(
      req.params.vestibular
    );

  res.json(data);
}

// Exporta todas as funções
module.exports = {
  listarTodas,
  buscarPorTema,
  buscarPorAno,
  buscarPorVestibular
};