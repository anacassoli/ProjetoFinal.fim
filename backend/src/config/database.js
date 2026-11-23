
require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),

  ssl: {
    rejectUnauthorized: false
  },

  connectionTimeoutMillis: 15000
});

pool.query("SELECT 1")
  .then(() => console.log("✅ PostgreSQL conectado"))
  .catch((err) =>
    console.error("❌ Erro PostgreSQL:", err.message)
  );

module.exports = pool;
