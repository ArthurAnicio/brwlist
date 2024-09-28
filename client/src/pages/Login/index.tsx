import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from "../../components/Footer";
import '../Login/index.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      console.error('Erro no login:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Erro ao fazer login.');
    }
  };

  return (
    <div className="container">
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
      <button onClick={() => navigate("/register")} style={{ marginTop: '10px' }}>
        Não tem uma conta? Cadastre-se
      </button>
      <Footer />
    </div>
  );
}

export default Login;
