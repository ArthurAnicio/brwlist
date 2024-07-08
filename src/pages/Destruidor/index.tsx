import { useState, useEffect } from 'react';
import './styles.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Paths from "../../components/Paths";
import Card, {Brawler} from '../../components/Card';
import brawlersData from '../../../public/brawlers.json';

function Destruidor(){
    const [brawlers, setBrawlers] = useState<Brawler[]>([]);

    useEffect(() => {
        const destruidores = brawlersData.brawlers.filter((brawler: Brawler) => brawler.classe === "Destruidor");
        setBrawlers(destruidores);
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

export default Destruidor;