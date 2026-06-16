/*URL BASE DA API*/

//Endereço do backend
//Todas as requisições serão feitas a partir dessa URL
const BASE_URL = "http://localhost:3000";


/*LOGIN*/
// Envia email e senha para o backend
// Se estiverem corretos, retorna um token JWT
export async function login(email, password) {
const res = await fetch(`${BASE_URL}/auth/login`, {
method: "POST",
// Informa ao backend que os dados enviados estão em JSON
headers: {
"Content-Type": "application/json"
},
// Converte os dados para JSON antes de enviar
body: JSON.stringify({
email,
password
})
});
// Se ocorrer erro no login, interrompe a execução
if (!res.ok) {
throw new Error("Erro no login");
}
// Retorna os dados recebidos do backend
// Exemplo: { token: "abc123..." }
return res.json();
}


/*HEADERS DE AUTENTICAÇÃO*/
// Monta automaticamente os headers necessários
// para acessar rotas protegidas
function getHeaders() {
// Recupera o token salvo após o login
const token = localStorage.getItem("jwtToken");
return {
"Content-Type": "application/json",
// Envia o token para o backend
// Formato padrão JWT:
// Authorization: Bearer token
Authorization: `Bearer ${token}`
};
}


/*BUSCAR TODAS AS QUESTÕES*/
// Busca todas as questões cadastradas
export async function getAll() {
const res = await fetch(
`${BASE_URL}/vestibular`,
{
headers: getHeaders()
}
);
// Verifica se a requisição foi bem-sucedida
if (!res.ok) {
throw new Error("Erro ao buscar questões");
}
// Retorna a lista de questões
return res.json();
}


/*BUSCAR QUESTÕES POR TEMA*/
// Busca questões filtrando pelo tema informado
export async function getByTema(tema) {
const res = await fetch(
`${BASE_URL}/vestibular/buscar/tema/${tema}`,
{
headers: getHeaders()
}
);
if (!res.ok) {
throw new Error("Erro ao buscar tema");
}
// Retorna apenas as questões do tema pesquisado
return res.json();
}


/*BUSCAR QUESTÕES POR ANO*/
// Busca questões filtrando pelo ano informado
export async function getByAno(ano) {
const res = await fetch(
`${BASE_URL}/vestibular/buscar/ano/${ano}`,
{
headers: getHeaders()
}
);
if (!res.ok) {
throw new Error("Erro ao buscar ano");
}
// Retorna as questões do ano selecionado
return res.json();
}


/*BUSCAR QUESTÕES POR VESTIBULAR*/
// Busca questões filtrando pelo vestibular informado
export async function getByVestibular(vestibular) {
const res = await fetch(
`${BASE_URL}/vestibular/buscar/vestibular/${vestibular}`,
{
headers: getHeaders()
}
);
if (!res.ok) {
throw new Error("Erro ao buscar vestibular");
}
// Retorna as questões do vestibular pesquisado
return res.json();
}