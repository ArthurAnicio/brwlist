import React, { useState, useEffect } from 'react';
import BrawlerList from '../../Brawlist';
import { Brawler } from '../../Types';
import brawlersData from '../../../public/brawlers.json';

const Home: React.FC = () => {
    const [brawlers, setBrawlers] = useState<Brawler[]>([]);

    useEffect(() => {
        setBrawlers(brawlersData.brawlers);
    }, []);

    return <BrawlerList brawlers={brawlers} />;
};

export default Home;





