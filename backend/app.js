
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  express.static(
    path.join(__dirname, "public")
  )
);
require("./db");
const authRoutes = require("./src/routes/authRoutes");
const questoesRoutes = require("./src/routes/questoesRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/vestibular", questoesRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "API BioVest funcionando!"
  });
});

// Exporta o servidor para a Vercel
module.exports = app;
