// Importa a conexão com o banco
const pool = require("../config/database");

/* =========================
   LISTAR TODAS
========================= */

async function listarTodas() {

  const result = await pool.query(`
    SELECT *
    FROM BuscaTudo
    ORDER BY num_qst
  `);

  return result.rows;
}

/* =========================
   BUSCAR POR TEMA
========================= */

async function buscarPorTema(tema) {

  const result = await pool.query(`
    SELECT *
    FROM BuscaTudo
    WHERE nome_tema ILIKE $1
  `, [`%${tema}%`]);

  return result.rows;
}

/* =========================
   BUSCAR POR ANO
========================= */

async function buscarPorAno(ano) {

  const result = await pool.query(`
    SELECT *
    FROM BuscaTudo
    WHERE ano_vest = $1
  `, [ano]);

  return result.rows;
}

/* =========================
   BUSCAR POR VESTIBULAR
========================= */

async function buscarPorVestibular(vest) {

  const result = await pool.query(`
    SELECT *
    FROM BuscaTudo
    WHERE nome ILIKE $1
  `, [`%${vest}%`]);

  return result.rows;
}

// Exporta todas as consultas
module.exports = {
  listarTodas,
  buscarPorTema,
  buscarPorAno,
  buscarPorVestibular
};