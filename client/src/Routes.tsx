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
import PrivateRoute from "../src/components/PrivateRoute";

function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/algoz" element={<PrivateRoute><Algoz /></PrivateRoute>} />
        <Route path="/controle" element={<PrivateRoute><Controle /></PrivateRoute>} />
        <Route path="/destruidor" element={<PrivateRoute><Destruidor /></PrivateRoute>} />
        <Route path="/detonador" element={<PrivateRoute><Detonador /></PrivateRoute>} />
        <Route path="/suporte" element={<PrivateRoute><Suporte /></PrivateRoute>} />
        <Route path="/tanque" element={<PrivateRoute><Tanque /></PrivateRoute>} />
        <Route path="/tiro-preciso" element={<PrivateRoute><Tiro_Preciso /></PrivateRoute>} />
        <Route path="/brawldle" element={<PrivateRoute><Brawldle /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default WebRoutes;