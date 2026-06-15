import { useEffect, useState } from "react";
import { getAll, getByVestibular } from "../services/api";
import Tabela from "../components/Tabela";
import "../styles/enunciados.css";

export default function Vestibular() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  async function loadAll() {
    setData(await getAll());
  }

  async function searchVest() {
    if (!search) return loadAll();
    setData(await getByVestibular(search));
  }

  useEffect(() => {
    loadAll();
  }, []);

  return (
    <div className="conteudo">
      <h1>Questões por Vestibular</h1>

      <div className="nav-buttons">
        <a href="/home"><button>Home</button></a>
        <a href="/tema"><button>Tema</button></a>
        <a href="/ano"><button>Ano</button></a>
      </div>

      <div className="form-row">
        <input
          placeholder="Digite o vestibular..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={searchVest}>Buscar</button>
        <button onClick={loadAll}>Mostrar Todas</button>
      </div>

      <Tabela data={data} />
    </div>
  );
}