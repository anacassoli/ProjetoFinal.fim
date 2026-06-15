import { useEffect, useState } from "react";
import { getAll, getByTema } from "../services/api";
import Tabela from "../components/Tabela";
import "../styles/enunciados.css";

export default function Tema() {

  /*ESTADOS*/

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  /*CARREGA TODAS AS QUESTÕES*/

  async function loadAll() {
    setData(await getAll());
  }

  /*BUSCA POR TEMA*/

  async function searchTema() {

    if (!search) return loadAll();

    setData(
      await getByTema(search)
    );
  }

  /* EXECUTA AO ABRIR A PÁGINA*/

  useEffect(() => {
    loadAll();
  }, []);

  return (
    <div className="conteudo">

      <h1>Questões por Tema</h1>

      {/* Navegação entre páginas */}
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

      {/* Área de filtros */}
      <div className="form-row">

        <input
          placeholder="Digite um tema..."
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <button onClick={searchTema}>
          Buscar
        </button>

        <button onClick={loadAll}>
          Mostrar Todas
        </button>

      </div>

      {/* Tabela de resultados */}
      <Tabela data={data} />

    </div>
  );
}