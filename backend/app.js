// Carrega as variáveis de ambiente
require("dotenv").config();

// Importações principais
const express = require("express");
const cors = require("cors");
const path = require("path");

// Cria a aplicação Express
const app = express();

// Define a porta do servidor
const PORT = process.env.PORT || 3000;

/* =========================
   MIDDLEWARES
========================= */

// Permite comunicação entre frontend e backend
app.use(cors());

// Permite receber JSON
app.use(express.json());

// Define a pasta pública
app.use(
  express.static(
    path.join(__dirname, "public")
  )
);

/* =========================
   IMPORTAÇÃO DAS ROTAS
========================= */

const authRoutes =
  require("./src/routes/authRoutes");

const questoesRoutes =
  require("./src/routes/questoesRoutes");

/* =========================
   REGISTRO DAS ROTAS
========================= */

// Rotas de autenticação
app.use("/auth", authRoutes);

// Rotas das questões
app.use("/vestibular", questoesRoutes);

/* =========================
   PÁGINA INICIAL
========================= */

app.get("/", (req, res) => {

  res.sendFile(
    path.join(
      __dirname,
      "public",
      "login.html"
    )
  );
});

/* =========================
   INICIALIZAÇÃO DO SERVIDOR
========================= */

app.listen(PORT, () => {
  console.log(
    "🚀 Backend rodando na porta",
    PORT
  );
});