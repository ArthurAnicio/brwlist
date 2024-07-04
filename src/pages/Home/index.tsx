import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Paths from "../../components/Paths";
import BrawlerList from '../../Brawlist';
import { Brawler } from '../../Types';
import brawlersData from '../../public/brawlers.json';

const Home: React.FC = () => {
    const [brawlers, setBrawlers] = useState<Brawler[]>([]);

    useEffect(() => {
        setBrawlers(brawlersData.brawlers);
    }, []);

    return (
        <div>
            <Header />
            <div id="container">
                <Paths />
                <BrawlerList brawlers={brawlers} /> 
            </div>
            <Footer />
        </div>
    );
};

export default Home;