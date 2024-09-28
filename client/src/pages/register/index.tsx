import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from "../../components/Footer"; 
import '../register/index.css'; 

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/register', { username, password });
            alert(response.data.message);
            navigate('/login');
        } catch (error) {
            console.error('Erro no registro:', error.response?.data?.message || error.message);
            alert(error.response?.data?.message || 'Erro ao registrar.');
        }
    };

    return (
        <>
            <div className="container">
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
            <Footer /> 
        </>
    );
}

export default Register;
