
// IMPORTAÇÕES

import { useEffect, useState } from "react";
import { getAll, getByVestibular } from "../services/api";
import Tabela from "../components/Tabela";
import "../styles/enunciados.css";

/*PÁGINA: VESTIBULAR*/
export default function Vestibular() {

  useEffect(() => { //serve para executar um código automaticamente.

    const token = localStorage.getItem("jwtToken"); // Busca o token JWT salvo no navegador após o login

    if (!token) { // se não existir token, o usuário não fez logout ou não tem autenticação
      window.location.href = "/"; // redireciona para a página de login
    }

  }, []);
/*ESTADOS*/
  // Armazena as questões vindas do backend
  const [data, setData] = useState([]);
  // Armazena o texto digitado no input de busca
  const [search, setSearch] = useState("");


  /*CARREGAR TODAS AS QUESTÕES*/
  // Busca todas as questões no backend
  async function loadAll() {
    setData(await getAll());
  }


  /*BUSCAR POR VESTIBULAR*/
  // Filtra questões pelo vestibular digitado
  async function searchVest() {
  // Se o input estiver vazio, mostra tudo
  if (!search) return loadAll();
  // Faz a busca filtrando pelo vestibular informado
  setData(await getByVestibular(search));
  }


  /*EXECUÇÃO INICIAL (AO ABRIR A PÁGINA)*/
  // Executa apenas uma vez quando a página carrega
  useEffect(() => {
  loadAll();
  }, []);


  /*RENDERIZAÇÃO DA PÁGINA*/
  return (
    <div className="conteudo">
    <h1>Questões por Vestibular</h1>
    <div className="nav-buttons">
    <a href="/home">
    <button>Home</button>
    </a>
    <a href="/tema">
    <button>Tema</button>
    </a>
    <a href="/ano">
    <button>Ano</button>
    </a>
    </div>


    {/*ÁREA DE BUSCA*/}
    <div className="form-row">
    {/* Input de busca */}
    <input
    placeholder="Digite o vestibular..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />


    {/* Botão de busca */}
    <button onClick={searchVest}>
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