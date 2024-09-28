import { BrowserRouter, Routes, Route } from "react-router-dom";
import Algoz from "./pages/Algoz";
import Controle from "./pages/Controle";
import Destruidor from "./pages/Destruidor";
import Detonador from "./pages/Detonador";
import Home from "./pages/Home";
import Suporte from "./pages/Suporte";
import Tanque from "./pages/Tanque";
import Tiro_Preciso from "./pages/Tiro-Preciso";
import Brawldle from "./pages/Brawldle";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute"; 

function WebRoutes() {
    const isAuthenticated = Boolean(localStorage.getItem("token")); 

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<PrivateRoute isAuthenticated={isAuthenticated}><Home /></PrivateRoute>} />
                <Route path="/algoz" element={<PrivateRoute isAuthenticated={isAuthenticated}><Algoz /></PrivateRoute>} />
                <Route path="/controle" element={<PrivateRoute isAuthenticated={isAuthenticated}><Controle /></PrivateRoute>} />
                <Route path="/destruidor" element={<PrivateRoute isAuthenticated={isAuthenticated}><Destruidor /></PrivateRoute>} />
                <Route path="/detonador" element={<PrivateRoute isAuthenticated={isAuthenticated}><Detonador /></PrivateRoute>} />
                <Route path="/suporte" element={<PrivateRoute isAuthenticated={isAuthenticated}><Suporte /></PrivateRoute>} />
                <Route path="/tanque" element={<PrivateRoute isAuthenticated={isAuthenticated}><Tanque /></PrivateRoute>} />
                <Route path="/tiro-preciso" element={<PrivateRoute isAuthenticated={isAuthenticated}><Tiro_Preciso /></PrivateRoute>} />
                <Route path="/brawldle" element={<PrivateRoute isAuthenticated={isAuthenticated}><Brawldle /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default WebRoutes;
