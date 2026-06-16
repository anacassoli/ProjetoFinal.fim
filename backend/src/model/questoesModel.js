 // Importa a conexão com o banco de dados (pool de conexões)
 // O pool permite executar queries no PostgreSQL de forma otimizada e segura
const pool = require("../config/database");


/*LISTAR TODAS AS QUESTÕES*/
// Busca todas as questões disponíveis no banco de dados
async function listarTodas() {
// Executa uma consulta SQL no banco
const result = await pool.query(`
SELECT *
FROM BuscaTudo
ORDER BY num_qst
`);
// Retorna apenas os dados (linhas encontradas)
return result.rows;
}


/*BUSCAR QUESTÕES POR TEMA*/
// Filtra as questões pelo tema (ex: matemática, física, etc.)
async function buscarPorTema(tema) {
const result = await pool.query(`
SELECT *
FROM BuscaTudo
WHERE nome_tema ILIKE $1
`, [`%${tema}%`]);
// ILIKE → ignora maiúsculas e minúsculas
// %texto% → busca parcial (contém o termo em qualquer parte)
return result.rows;
}


/*BUSCAR QUESTÕES POR ANO*/
// Filtra questões pelo ano do vestibular
async function buscarPorAno(ano) {
const result = await pool.query(`
SELECT *
FROM BuscaTudo
WHERE ano_vest = $1
`, [ano]);
// $1 evita SQL Injection (deixa a query mais segura)
return result.rows;
}


/*BUSCAR POR VESTIBULAR*/
// Filtra questões pelo nome do vestibular (ENEM, FUVEST etc.)
async function buscarPorVestibular(vest) {
const result = await pool.query(`
SELECT *
FROM BuscaTudo
WHERE nome ILIKE $1
`, [`%${vest}%`]);
// Busca parcial e sem diferenciar maiúsculas/minúsculas
return result.rows;
}


/*EXPORTAÇÃO DO MODEL*/
// Exporta todas as funções para serem usadas no controller
module.exports = {
listarTodas,
buscarPorTema,
buscarPorAno,
buscarPorVestibular
};