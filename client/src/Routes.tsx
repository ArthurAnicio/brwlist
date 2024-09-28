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
import Register from "./pages/register"; 

function WebRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/algoz" element={<Algoz />} />
                <Route path="/controle" element={<Controle />} />
                <Route path="/destruidor" element={<Destruidor />} />
                <Route path="/detonador" element={<Detonador />} />
                <Route path="/suporte" element={<Suporte />} />
                <Route path="/tanque" element={<Tanque />} />
                <Route path="/tiro-preciso" element={<Tiro_Preciso />} />
                <Route path="/brawldle" element={<Brawldle />} />
                <Route path="/" element={<Login />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default WebRoutes;
