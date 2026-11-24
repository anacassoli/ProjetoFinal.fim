
const Model = require("../model/questoesModel");

// LISTAR TODAS AS QUESTÕES
async function listarTodas(req, res) {
  try {
    const data = await Model.listarTodas();
    res.json(data);
  } catch (erro) {
    console.error("Erro ao listar questões:", erro.message);
    res.status(500).json({
      mensagem: "Erro ao buscar questões"
    });
  }
}

// BUSCAR QUESTÕES POR TEMA
async function buscarPorTema(req, res) {
  try {
    const data = await Model.buscarPorTema(req.params.tema);
    res.json(data);
  } catch (erro) {
    console.error("Erro ao buscar por tema:", erro.message);
    res.status(500).json({
      mensagem: "Erro ao buscar questões por tema"
    });
  }
}

// BUSCAR QUESTÕES POR ANO
async function buscarPorAno(req, res) {
  try {
    const data = await Model.buscarPorAno(req.params.ano);
    res.json(data);
  } catch (erro) {
    console.error("Erro ao buscar por ano:", erro.message);
    res.status(500).json({
      mensagem: "Erro ao buscar questões por ano"
    });
  }
}

// BUSCAR QUESTÕES POR VESTIBULAR
async function buscarPorVestibular(req, res) {
  try {
    const data = await Model.buscarPorVestibular(req.params.vestibular);
    res.json(data);
  } catch (erro) {
    console.error("Erro ao buscar por vestibular:", erro.message);
    res.status(500).json({
      mensagem: "Erro ao buscar questões por vestibular"
    });
  }
}

module.exports = {
  listarTodas,
  buscarPorTema,
  buscarPorAno,
  buscarPorVestibular
};
