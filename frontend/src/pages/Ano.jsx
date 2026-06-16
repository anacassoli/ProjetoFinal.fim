import { useEffect, useState } from "react";
import { getAll, getByAno } from "../services/api";
import Tabela from "../components/Tabela";
import "../styles/enunciados.css";

export default function Ano() {

      useEffect(() => { //serve para executar um código automaticamente.

    const token = localStorage.getItem("jwtToken"); // Busca o token JWT salvo no navegador após o login

    if (!token) { // se não existir token, o usuário não fez logout ou não tem autenticação
      window.location.href = "/"; // redireciona para a página de login
    }

  }, []);


// guarda os dados das questões
const [data, setData] = useState([]);

// guarda o valor digitado no input
const [search, setSearch] = useState("");

// busca todas as questões no backend
async function loadAll() {
setData(await getAll());
}

// busca questões filtrando pelo ano
async function searchAno() {
if (!search) return loadAll();
setData(await getByAno(search));
}

// executa quando a página abre
useEffect(() => {
loadAll();
}, []);

return (
<div className="conteudo">
{/* título da página */}
<h1>Questões por Ano</h1>

{/* navegação entre páginas */}
<div className="nav-buttons">
<a href="/home"><button>Home</button></a>
<a href="/tema"><button>Tema</button></a>
<a href="/vestibular"><button>Vestibular</button></a>
</div>

{/* área de busca */}
<div className="form-row">

{/* input do ano */}
<input
placeholder="Digite o ano..."
onChange={(e) => setSearch(e.target.value)}
/>

{/* botão buscar por ano */}
<button onClick={searchAno}>Buscar</button>

{/* botão mostrar tudo */}

<button onClick={loadAll}>Mostrar Todas</button>
</div>
{/* tabela que mostra os dados */}
<Tabela data={data} />
</div>
);
}