import { useState, useEffect } from 'react';
import './styles.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Paths from "../../components/Paths";
import Card from '../../components/Card';
import { Brawler } from '../../models/Brawler';
import brawlersData from '../../../public/brawlers.json';

function Detonador(){
    const [brawlers, setBrawlers] = useState<Brawler[]>([]);

    useEffect(() => {
        const detonadores = brawlersData.brawlers.filter((brawler: Brawler) => brawler.classe === "Detonador");
        setBrawlers(detonadores);
    }, []);

    return (
        <div>
            <Header />
            <div id="container">
                <Paths />
                <div className="list">
                    {
                        brawlers.map((brawler)=>(
                            <Card brawler={brawler}/>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Detonador;