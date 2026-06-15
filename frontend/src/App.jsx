// Importa todas as páginas do sistema
import Login from "./pages/Login";
import Home from "./pages/Home";
import Tema from "./pages/Tema";
import Ano from "./pages/Ano";
import Vestibular from "./pages/Vestibular";

export default function App() {

  // Captura a rota atual da URL
  const path = window.location.pathname;

  /*NAVEGAÇÃO ENTRE PÁGINAS*/

  if (path === "/") return <Login />;
  if (path === "/home") return <Home />;
  if (path === "/tema") return <Tema />;
  if (path === "/ano") return <Ano />;
  if (path === "/vestibular") return <Vestibular />;

  // Caso a página não exista
  return <h1>404 - Página não encontrada</h1>;
}