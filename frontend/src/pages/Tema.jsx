import { useEffect, useState } from "react";
import { getAll, getByTema } from "../services/api";
import Tabela from "../components/Tabela";
import "../styles/enunciados.css";

export default function Tema() {

useEffect(() => { //serve para executar um código automaticamente.

    const token = localStorage.getItem("jwtToken"); // Busca o token JWT salvo no navegador após o login

    if (!token) { // se não existir token, o usuário não fez logout ou não tem autenticação
      window.location.href = "/"; // redireciona para a página de login
    }

  }, []);

  /*ESTADOS*/
  // Guarda as questões vindas do backend
  const [data, setData] = useState([]);
  // Guarda o texto digitado no input de busca
  const [search, setSearch] = useState("");


  /*CARREGAR TODAS AS QUESTÕES*/
  // Busca todas as questões no backend
  async function loadAll() {
    setData(await getAll());
  }


  /*BUSCAR POR TEMA*/
  // Busca questões filtrando pelo tema digitado
  async function searchTema() {
  // Se o input estiver vazio, carrega tudo
  if (!search) return loadAll();
  // Caso contrário, busca pelo tema informado
  setData(await getByTema(search));
  }


  /*EXECUÇÃO INICIAL (AO ABRIR A PÁGINA)*/
  // Executa apenas uma vez quando a página carrega
  useEffect(() => {
  loadAll();
  }, []);


  /*RENDERIZAÇÃO DA PÁGINA*/
  return (
  <div className="conteudo">
  {/*TÍTULO*/}
  <h1>Questões por Tema</h1>

  {/*NAVEGAÇÃO ENTRE PÁGINAS*/}
  <div className="nav-buttons">
  <a href="/home">
  <button>Home</button>
  </a>

  <a href="/ano">
  <button>Ano</button>
  </a>

  <a href="/vestibular">
  <button>Vestibular</button>
  </a>
  </div>

 {/*CARDS DE TEMAS (FILTRO RÁPIDO)*/}
 <section className="temas">
  <div className="card" onClick={() => searchTema("Fisiologia Humana")}>
  <div className="circulo">
  <img src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png" alt="Fisiologia Humana" />
  </div>
  <h3>Fisiologia Humana</h3>
  </div>

  <div className="card" onClick={() => searchTema("Genética e Biotecnologia")}>
  <div className="circulo">
  <img src="https://cdn-icons-png.flaticon.com/512/4178/4178680.png" alt="Genética" />
  </div>
  <h3>Genética e Biotecnologia</h3>
  </div>

  <div className="card" onClick={() => searchTema("Citologia")}>
  <div className="circulo">
  <img src="https://cdn-icons-png.flaticon.com/256/10202/10202686.png" alt="Citologia" />
  </div>
  <h3>Citologia</h3>
  </div>

  <div className="card" onClick={() => searchTema("Metabolismo Energético")}>
  <div className="circulo">
  <img src="https://cdn-icons-png.flaticon.com/512/1048/1048941.png" alt="Metabolismo" />
  </div>
  <h3>Metabolismo Energético</h3>
  </div>

  <div className="card" onClick={() => searchTema("Evolução")}>
  <div className="circulo">
  <img src="https://cdn-icons-png.flaticon.com/512/5660/5660272.png" alt="Evolução" />
  </div>
  <h3>Evolução</h3>
  </div>

  <div className="card" onClick={() => searchTema("Zoologia")}>
  <div className="circulo">
  <img src="https://cdn-icons-png.flaticon.com/512/3069/3069172.png" alt="Zoologia" />
  </div>
  <h3>Zoologia</h3>
  </div>

  <div className="card" onClick={() => searchTema("Botânica")}>
  <div className="circulo">
  <img src="https://cdn-icons-png.flaticon.com/512/765/765613.png" alt="Botânica" />
  </div>
  <h3>Botânica</h3>
  </div>

   <div className="card" onClick={() => searchTema("Microbiologia")}>
   <div className="circulo">
   <img src="https://cdn-icons-png.flaticon.com/512/4178/4178690.png" alt="Microbiologia" />
   </div>
   <h3>Microbiologia</h3>
   </div>

   <div className="card" onClick={() => searchTema("Ecologia")}>
   <div className="circulo">
   <img src="https://cdn-icons-png.flaticon.com/512/4284/4284490.png" alt="Ecologia" />
   </div>
    <h3>Ecologia</h3>
    </div>

    <div className="card" onClick={() => searchTema("Bioquímica")}>
    <div className="circulo">
    <img src="https://cdn-icons-png.flaticon.com/512/6166/6166904.png" alt="Bioquímica" />
    </div>
    <h3>Bioquímica</h3>
    </div>

    </section>

    {/* FILTRO POR TEXTO*/}
    <div className="form-row">
    {/* Input de busca por tema */}
    <input
    placeholder="Digite um tema..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />
    {/* Botão de busca manual */}
    <button onClick={searchTema}>
     Buscar
    </button>
    {/* Botão para resetar filtros */}
    <button onClick={loadAll}>
     Mostrar Todas
    </button>
    </div>

    {/*TABELA DE RESULTADOS*/}
    <Tabela data={data} />
    </div>
  );
}