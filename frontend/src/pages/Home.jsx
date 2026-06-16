import "../styles/home.css";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => { //serve para executar um código automaticamente.

    const token = localStorage.getItem("jwtToken"); // Busca o token JWT salvo no navegador após o login

    if (!token) { // se não existir token, o usuário não fez logout ou não tem autenticação
      window.location.href = "/"; // redireciona para a página de login
    }

  }, []);

// função de logout (sair do sistema)
function logout() {
// remove o token de autenticação do navegador
localStorage.removeItem("jwtToken");

// redireciona para a página de login
window.location.href = "/";
}

return (
<div className="container">

{/* botão de sair */}
<button className="logout-btn" onClick={logout}>
Sair
</button>

{/* título do sistema */}
<h1>BioVest</h1>

{/* descrição do sistema */}
<p>Sistema de Questões de Biologia para Vestibulares</p>

{/* botões de navegação */}
<div className="botoes">

{/* página de temas */}
<a href="/tema" className="botao">
Temas
</a>

{/* página de anos */}
<a href="/ano" className="botao">
Anos
</a>

{/* página de vestibulares */}
<a href="/vestibular" className="botao">
Vestibulares
</a>

</div>
</div>
);
}