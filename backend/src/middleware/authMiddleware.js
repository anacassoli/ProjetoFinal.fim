// Importa a biblioteca JWT (JSON Web Token)
// Ela serve tanto para criar quanto para validar tokens de autenticação
const jwt = require("jsonwebtoken");


/*MIDDLEWARE DE AUTENTICAÇÃO (VALIDAÇÃO DO TOKEN)*/
// Middleware = função que roda ANTES da rota principal
// Ele funciona como um "porteiro" da API:
// só deixa passar quem estiver autenticado corretamente
function verificarToken(req, res, next) {
// O frontend envia o token dentro do header "Authorization"
// Formato padrão:
// Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
const header = req.headers.authorization;
// Se não existir header OU não começar com "Bearer "
// significa que o usuário NÃO enviou token válido
if (!header || !header.startsWith("Bearer ")  ) {
return res.status(401).json({
mensagem: "Token não enviado"
});
}
// Aqui removemos a palavra "Bearer"
// Ficando apenas o token em si
const token = header.split(" ")[1];


//VALIDAR O TOKEN
try {
// jwt.verify faz duas coisas:
// 1. verifica se o token foi assinado com a chave correta
// 2. verifica se o token não expirou
const decoded = jwt.verify(
token,
process.env.JWT_SECRET
);


// 5. TOKEN VÁLIDO → LIBERAR ACESSO    
// Aqui colocamos os dados do usuário dentro da requisição
// Exemplo: req.user = { email: "teste@email.com", iat, exp }
// Isso permite usar essas infos nas próximas rotas
req.user = decoded;
// Libera o fluxo para continuar para a rota final
next();
} catch {
// 6. TOKEN INVÁLIDO OU EXPIRADO
// Se algo der errado na verificação, bloqueia o acesso
return res.status(401).json({
mensagem: "Token inválido"
});
}
}



// EXPORTAÇÃO DO MIDDLEWARE
// Permite usar isso nas rotas protegidas, por exemplo:
// router.get("/questoes", verificarToken, listarTodas)
module.exports = { verificarToken };