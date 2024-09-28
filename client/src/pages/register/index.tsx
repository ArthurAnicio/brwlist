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

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', { username, password });
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      const axiosError = error as AxiosError; 
      console.error('Erro no registro:', axiosError.response?.data.message || (error as Error).message);
      alert(axiosError.response?.data.message || 'Erro ao registrar.');
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
