// Importa o Model responsável por acessar o banco de dados
// O Model é a camada que faz as consultas SQL (SELECT, WHERE, etc.)
// Ele separa a lógica do banco da lógica da API (boa prática de arquitetura)
const Model = require("../model/questoesModel");


/* LISTAR TODAS AS QUESTÕES*/
// Função assíncrona porque depende de uma consulta no banco (que leva tempo)
async function listarTodas(req, res) {
// Aqui chamamos o model, que vai buscar todas as questões no banco
// Não precisamos passar nenhum filtro, então ele retorna tudo
const data = await Model.listarTodas();
// Envia os dados para o frontend em formato JSON
// O frontend vai receber um array de questões
res.json(data);
}


/*BUSCAR QUESTÕES POR TEMA*/
// Essa função filtra as questões por tema (ex: matemática, física)
async function buscarPorTema(req, res) {
// req.params.tema vem da URL
// Exemplo de rota: /questoes/matematica
const data = await Model.buscarPorTema(
req.params.tema
);
// Retorna apenas as questões daquele tema
res.json(data);
}


/* BUSCAR QUESTÕES POR ANO*/
// Filtra questões com base no ano (ex: 2023, 2022)
async function buscarPorAno(req, res) {
// Pega o valor do parâmetro da URL
// Exemplo: /questoes/2023
const data = await Model.buscarPorAno(
req.params.ano
);
// Retorna as questões daquele ano específico
res.json(data);
}


/*BUSCAR QUESTÕES POR VESTIBULAR*/
// Filtra questões pelo vestibular (ex: ENEM, FUVEST, etc.)
async function buscarPorVestibular(req, res) {
// Exemplo de URL: /questoes/enem
// Aqui pegamos "enem" ou outro vestibular informado
const data = await Model.buscarPorVestibular(
req.params.vestibular
);
// Retorna somente as questões daquele vestibular
res.json(data);
}


/*EXPORTAÇÃO DAS FUNÇÕES*/
// Aqui exportamos todas as funções para o Express usar nas rotas
// Exemplo: router.get("/questoes", listarTodas)
module.exports = {
listarTodas,
buscarPorTema,
buscarPorAno,
buscarPorVestibular
};