import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

interface AxiosError {
  response?: {
    data: {
      message: string;
    };
  };
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      // Usando type assertion para tratar o erro
      const axiosError = error as AxiosError; // Definindo o tipo
      console.error('Erro no login:', axiosError.response?.data.message || (error as Error).message);
      alert(axiosError.response?.data.message || 'Erro ao fazer login.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuário"
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
