// Importa a biblioteca JWT para geração de tokens
const jwt = require("jsonwebtoken");

// Credenciais definidas no arquivo .env
const AUTH_USER = process.env.AUTH_USER;
const AUTH_PASSWORD = process.env.AUTH_PASSWORD;

/* =========================
   LOGIN
========================= */

function login(req, res) {

  // Recebe email e senha enviados pelo frontend
  const { email, password } = req.body;

  // Valida se os campos foram preenchidos
  if (!email || !password) {
    return res.status(400).json({
      mensagem: "E-mail e senha obrigatórios"
    });
  }

  // Verifica se as credenciais estão corretas
  if (
    email !== AUTH_USER ||
    password !== AUTH_PASSWORD
  ) {
    return res.status(401).json({
      mensagem: "Credenciais inválidas"
    });
  }

  // Cria um token JWT válido por 2 horas
  const token = jwt.sign(
    { email },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  // Retorna o token para o frontend
  return res.json({ token });
}

// Exporta as funções do controller
module.exports = { login };