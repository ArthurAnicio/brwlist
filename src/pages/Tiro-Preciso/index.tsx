import { useState, useEffect } from 'react';
import './styles.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Paths from "../../components/Paths";
import Card from '../../components/Card';
import { Brawler } from '../../models/Brawler';
import brawlersData from '../../../public/brawlers.json';

function Tiro_Preciso(){
    const [brawlers, setBrawlers] = useState<Brawler[]>([]);

    useEffect(() => {
        const atiradores = brawlersData.brawlers.filter((brawler: Brawler) => brawler.classe === "Tiro-preciso");
        setBrawlers(atiradores);
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

export default Tiro_Preciso;