export default function Header() {
  function logout() {
    localStorage.removeItem("jwtToken");
    window.location.href = "/";
  }

  return (
    <header style={{ display: "flex", gap: 20 }}>
      <a href="/home">Home</a>
      <a href="/tema">Tema</a>
      <a href="/ano">Ano</a>
      <a href="/vestibular">Vestibular</a>

      <button onClick={logout}>Sair</button>
    </header>
  );
}