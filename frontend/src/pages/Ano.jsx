import { useEffect, useState } from "react";
import { getAll, getByAno } from "../services/api";
import Tabela from "../components/Tabela";
import "../styles/enunciados.css";

export default function Ano() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  async function loadAll() {
    setData(await getAll());
  }

  async function searchAno() {
    if (!search) return loadAll();
    setData(await getByAno(search));
  }

  useEffect(() => {
    loadAll();
  }, []);

  return (
    <div className="conteudo">
      <h1>Questões por Ano</h1>

      <div className="nav-buttons">
        <a href="/home"><button>Home</button></a>
        <a href="/tema"><button>Tema</button></a>
        <a href="/vestibular"><button>Vestibular</button></a>
      </div>

      <div className="form-row">
        <input
          placeholder="Digite o ano..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={searchAno}>Buscar</button>
        <button onClick={loadAll}>Mostrar Todas</button>
      </div>

      <Tabela data={data} />
    </div>
  );
}