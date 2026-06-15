// Hook para controlar estados
import { useState } from "react";

// Função de login da API
import { login } from "../services/api";

// Estilo da página
import "../styles/login.css";

export default function Login() {

  /*estados*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

 /*login*/
  async function handleSubmit(e) {
    // Evita recarregar a página
    e.preventDefault();

    try {
      // Envia os dados para o backend
      const data =
        await login(email, password);
      // Salva o token JWT
      localStorage.setItem(
        "jwtToken",
        data.token
      );
      // Redireciona para Home
      window.location.href = "/home";
    } catch {
      // Exibe mensagem de erro
      setMsg("Login inválido");
    }
  }

  return (
    <main>
      {/* Card de login */}
      <div className="panel login-panel">
        <h2>Login</h2>
        {/* Mensagem de erro */}
        {msg && (
          <div className="message">
            {msg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Campo de e-mail */}
          <div className="form-row">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          {/* Campo de senha */}
          <div className="form-row">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          {/* Botão de login */}
          <div className="button-row">
            <button type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}