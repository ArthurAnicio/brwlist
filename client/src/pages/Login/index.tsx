// client/src/pages/Login.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const { token } = response.data;
      localStorage.setItem("token", token); // Armazena o token no localStorage
      navigate("/home"); // Redireciona para a página home
    } catch (error) {
      console.error('Erro no login:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Erro ao fazer login.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
