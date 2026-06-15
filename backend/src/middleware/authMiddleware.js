// Importa a biblioteca JWT
const jwt = require("jsonwebtoken");

/* =========================
   VALIDAÇÃO DO TOKEN
========================= */

function verificarToken(req, res, next) {

  // Recebe o token enviado pelo frontend
  const header =
    req.headers.authorization;

  // Verifica se o token existe
  if (
    !header ||
    !header.startsWith("Bearer ")
  ) {
    return res.status(401).json({
      mensagem: "Token não enviado"
    });
  }

  // Remove a palavra Bearer
  const token = header.split(" ")[1];

  try {

    // Verifica se o token é válido
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Armazena os dados do usuário
    req.user = decoded;

    // Continua para a rota solicitada
    next();

  } catch {

    return res.status(401).json({
      mensagem: "Token inválido"
    });
  }
}

// Exporta o middleware
module.exports = { verificarToken };