// Importa a biblioteca JWT (JSON Web Token)
// Ela serve para criar e validar tokens de autenticação
const jwt = require("jsonwebtoken");
// Aqui estamos pegando variáveis de ambiente do arquivo .env
// Isso é importante porque evita expor dados sensíveis no código
// Exemplo: usuário e senha ficam "escondidos" fora do código fonte
const AUTH_USER = process.env.AUTH_USER;
const AUTH_PASSWORD = process.env.AUTH_PASSWORD;


/*FUNÇÃO DE LOGIN*/
// Essa função recebe a requisição (req) e resposta (res)
// Ela será usada na rota de login do backend
function login(req, res) {
// Pega os dados que o frontend enviou no corpo da requisição (body)
const { email, password } = req.body;
//VALIDAÇÃO 1: CAMPOS OBRIGATÓRIOS
// Se o usuário não enviou email OU senha, bloqueia o acesso
// Isso evita requisições incompletas
if (!email || !password) {
return res.status(400).json({
mensagem: "E-mail e senha obrigatórios"
});
}


// VALIDAÇÃO 2: CREDENCIAIS
// Aqui comparamos o que o usuário enviou com o que está no .env
// Se email OU senha estiverem errados, negamos acesso
// O operador || significa "OU"
if (email !== AUTH_USER || password !== AUTH_PASSWORD ) {
return res.status(401).json({
mensagem: "Credenciais inválidas"
});
}


// SE CHEGOU ATÉ AQUI, LOGIN FOI ACEITO
// Agora criamos um TOKEN JWT
// Esse token é como uma "identidade digital" do usuário logado
const token = jwt.sign(
{ email }, // payload (dados dentro do token)
// aqui estamos guardando o email do usuário
process.env.JWT_SECRET, // chave secreta do servidor
// ela garante que o token não pode ser falsificado
{ expiresIn: "2h" } // tempo de validade do token
// depois disso o usuário precisa logar de novo
);


// RESPOSTA FINAL PARA O FRONTEND
// Enviamos o token para o frontend
// O frontend normalmente salva isso no localStorage ou cookie
// Depois ele usa esse token para acessar rotas protegidas
return res.json({
token
});
}


// EXPORTAÇÃO DA FUNÇÃO
// Isso permite que outros arquivos (como rotas) usem essa função
module.exports = { login };