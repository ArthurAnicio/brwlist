import { useState, useEffect } from 'react';
import './styles.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import brawlersData from '../../../public/brawlers.json';
import { Brawler } from '../../components/Card';

function Brawldle(){
    const [brawlers, setBrawlers] = useState<Brawler[]>([]);
    const [brawlerCerto, setBrawlerCerto] = useState<Brawler | null>(null);
    const [brawlerTentado, setBrawlerTentado] = useState<Brawler | null>(null);
    const [tentativa, setTentativa] = useState('')

    useEffect(() => {
        const data = brawlersData.brawlers;
        setBrawlers(data);

        const randomIndex = Math.floor(Math.random() * data.length);
        const randomBrawler: Brawler = data[randomIndex];
        setBrawlerCerto(randomBrawler);
    }, []);

    function validar(){
        const brawlerEncontrado = brawlers.find((brawler: Brawler) => brawler.nome.toLowerCase() === tentativa.toLowerCase().trim());

        if (brawlerEncontrado) {
            setBrawlerTentado(brawlerEncontrado); 
        } else {
            setBrawlerTentado(null); 
        }; 
    }
    

    return (
        <div>
            <Header />
            <div id="content">
                <div id="tentativa">
                    <input type="text" id='tentativaTxt' value={tentativa} onChange={(e)=>{setTentativa(e.target.value)}}/>
                    <button onClick={validar}> Enviar </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Brawldle;