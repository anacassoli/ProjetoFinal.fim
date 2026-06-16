// =========================================
// IMPORTAÇÕES

// Hook do React para controlar estados (dados que mudam na tela)
import { useState } from "react";

// Função que faz requisição de login para o backend
import { login } from "../services/api";

// Arquivo de estilo da página de login
import "../styles/login.css";


/*COMPONENTE LOGIN*/

export default function Login() {

// Armazena o email digitado pelo usuário
const [email, setEmail] = useState("");
// Armazena a senha digitada pelo usuário
const [password, setPassword] = useState("");
// Armazena mensagens de erro ou feedback do login
const [msg, setMsg] = useState("");


/*FUNÇÃO DE LOGIN (SUBMIT DO FORMULÁRIO)*/

async function handleSubmit(e) {
// Evita recarregar a página ao enviar o formulário
e.preventDefault();
try {
// Envia email e senha para o backend via API
const data = await login(email, password);
// Salva o token JWT no localStorage do navegador
localStorage.setItem("jwtToken", data.token);
// Redireciona o usuário para a página principal após login
window.location.href = "/home";
} catch {
// Caso ocorra erro no login, exibe mensagem na tela
setMsg("Login inválido");
}
}


/*RENDERIZAÇÃO DA INTERFACE*/
return (
<main>
{/* Card principal do login */}
<div className="panel login-panel">
<h2>Login</h2>
{/* Mensagem de erro (só aparece se msg não estiver vazia) */}
{msg && (
<div className="message">
{msg}
</div>
)}


{/* Formulário de login */}
<form onSubmit={handleSubmit}>
{/* Campo de email */}
<div className="form-row">
<label>E-mail</label>
<input
type="email"
placeholder="Digite seu e-mail"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</div>


{/* Campo de senha */}
<div className="form-row">
<label>Senha</label>
<input
type="password"
placeholder="Digite sua senha"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
</div>


{/* Botão de envio do formulário */}
<div className="button-row">
<button type="submit">
Entrar
</button>
</div>

</form>
</div>
</main>
);
}