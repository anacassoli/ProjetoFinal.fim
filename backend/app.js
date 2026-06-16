// CARREGAMENTO DE VARIÁVEIS DE AMBIENTE
// Carrega o arquivo .env para dentro do projeto
// Aqui ficam variáveis sensíveis como PORT, JWT_SECRET, credenciais etc.
require("dotenv").config();


/*IMPORTAÇÃO DE BIBLIOTECAS*/
// Framework principal do servidor
const express = require("express");
// Liberação de acesso entre frontend e backend
const cors = require("cors");
// Trabalha com caminhos de arquivos/pastas do sistema
const path = require("path");


/*CRIAÇÃO DO SERVIDOR*/
// Cria a aplicação Express (servidor)
const app = express();
// Define a porta do servidor
// Usa a variável do .env ou fallback 3000
const PORT = process.env.PORT || 3000;


/*MIDDLEWARES GLOBAIS*/
/*Middlewares são funções que rodam antes das rotas
Eles ajudam a preparar ou validar dados da requisição*/
// Libera acesso do frontend para o backend (evita erro de CORS)
app.use(cors());
// Permite o servidor entender JSON enviado pelo frontend
app.use(express.json());
// Define uma pasta pública para arquivos estáticos
// Ex: HTML, CSS, JS acessíveis direto pelo navegador
app.use(
express.static(
path.join(__dirname, "public")
)
);


/*IMPORTAÇÃO DAS ROTAS*/
// Rotas de autenticação (login, token etc.)
const authRoutes = require("./src/routes/authRoutes");
// Rotas de questões (vestibular)
const questoesRoutes = require("./src/routes/questoesRoutes");


/*REGISTRO DAS ROTAS*/
// Rotas de autenticação
app.use("/auth", authRoutes);
// Rotas de questões
app.use("/vestibular", questoesRoutes);


/*ROTA INICIAL*/
// Quando o usuário acessa "/"
// o servidor devolve a página de login
app.get("/", (req, res) => {
res.sendFile(
path.join(
__dirname,
"public",
"login.html"
)
);
});


/*INICIALIZAÇÃO DO SERVIDOR*/
// Coloca o servidor para "escutar" requisições
app.listen(PORT, () => {
  console.log("🚀 Backend rodando na porta", PORT);
});