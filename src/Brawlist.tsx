import React from 'react';
import { Brawler } from './models/Brawler';
import Card from './components/Card/index.tsx';

interface BrawlerListProps {
    brawlers: Brawler[];
}

const BrawlerList: React.FC<BrawlerListProps> = ({ brawlers }) => {
    return (
        <div className="brawler-list">
            {brawlers.map(brawler => (
                <Card key={brawler.id} brawler={brawler} />
            ))}
        </div>
    );
};

export default BrawlerList;