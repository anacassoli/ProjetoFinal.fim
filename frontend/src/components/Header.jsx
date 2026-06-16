
// COMPONENTE HEADER (BARRA DE NAVEGAÇÃO)
export default function Header() {

/*FUNÇÃO DE LOGOUT*/
// Remove o token do localStorage
// Isso desloga o usuário da aplicação
function logout() {
// Remove o token JWT armazenado no navegador
localStorage.removeItem("jwtToken");
// Redireciona o usuário para a página inicial (login)
window.location.href = "/";
}


/*RENDERIZAÇÃO DO COMPONENTE*/
return (
<header style={{ display: "flex", gap: 20 }}>
{/* Links de navegação do sistema */}
<a href="/home">Home</a>
<a href="/tema">Tema</a>
<a href="/ano">Ano</a>
<a href="/vestibular">Vestibular</a>
{/* Botão de logout (encerra sessão) */}
<button onClick={logout}>Sair</button>
</header>
);
}