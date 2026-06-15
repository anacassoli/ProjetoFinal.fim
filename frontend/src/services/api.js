const BASE_URL = "http://localhost:3000";

// LOGIN
export async function login(email, password) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  if (!res.ok) {
    throw new Error("Erro no login");
  }

  return res.json();
}

// TOKEN
function getHeaders() {
  const token = localStorage.getItem("jwtToken");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
}

// TODAS AS QUESTÕES
export async function getAll() {
  const res = await fetch(`${BASE_URL}/vestibular`, {
    headers: getHeaders()
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar questões");
  }

  return res.json();
}

// POR TEMA
export async function getByTema(tema) {
  const res = await fetch(
    `${BASE_URL}/vestibular/buscar/tema/${tema}`,
    {
      headers: getHeaders()
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar tema");
  }

  return res.json();
}

// POR ANO
export async function getByAno(ano) {
  const res = await fetch(
    `${BASE_URL}/vestibular/buscar/ano/${ano}`,
    {
      headers: getHeaders()
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar ano");
  }

  return res.json();
}

// POR VESTIBULAR
export async function getByVestibular(vestibular) {
  const res = await fetch(
    `${BASE_URL}/vestibular/buscar/vestibular/${vestibular}`,
    {
      headers: getHeaders()
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar vestibular");
  }

  return res.json();
}