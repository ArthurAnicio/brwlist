import { BrowserRouter, Routes , Route } from "react-router-dom";

import Algoz from "./pages/Algoz";
import Controle from "./pages/Controle";
import Destruidor from "./pages/Destruidor";
import Detonador from "./pages/Detonador";
import Home from "./pages/Home";
import Suporte from "./pages/Suporte";
import Tanque from "./pages/Tanque";
import Tiro_Preciso from "./pages/Tiro-Preciso";
import Brawldle from "./pages/Brawldle";

function WebRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/algoz" Component={Algoz} />
                <Route path="/controle" Component={Controle} />
                <Route path="/destruidor" Component={Destruidor} />
                <Route path="/detonador" Component={Detonador} />
                <Route path="/suporte" Component={Suporte} />
                <Route path="/tanque" Component={Tanque} />
                <Route path="/tiro-preciso" Component={Tiro_Preciso} />
                <Route path="/brawldle" Component={Brawldle} />
            </Routes>
        </BrowserRouter>
    );
}

export default WebRoutes;