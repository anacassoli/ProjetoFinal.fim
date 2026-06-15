import "../styles/home.css";

export default function Home() {

  function logout() {
    localStorage.removeItem("jwtToken");
    window.location.href = "/";
  }

  return (
    <div className="container">

      <button className="logout-btn" onClick={logout}>
        Sair
      </button>

      <h1>BioVest</h1>

      <p>
        Sistema de Questões de Biologia para Vestibulares
      </p>

      <div className="botoes">
        <a href="/tema" className="botao">
          Temas
        </a>

        <a href="/ano" className="botao">
          Anos
        </a>

        <a href="/vestibular" className="botao">
          Vestibulares
        </a>
      </div>

    </div>
  );
}