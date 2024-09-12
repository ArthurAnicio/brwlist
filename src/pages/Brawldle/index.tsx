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
                <h1 id="titulo">
                    Adivinhe o Brawler
                </h1>
                <div id="tentativa">
                    <input type="text" id='tentativaTxt' value={tentativa} onChange={(e)=>{setTentativa(e.target.value)}}/>
                    <button onClick={validar}> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Brawldle;