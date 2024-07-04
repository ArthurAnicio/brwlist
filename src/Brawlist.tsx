import React from 'react';
import { Brawler } from './Types';
import BrawlerCard from './BrawlerCard';

interface BrawlerListProps {
    brawlers: Brawler[];
}

const BrawlerList: React.FC<BrawlerListProps> = ({ brawlers }) => {
    return (
        <div className="brawler-list">
            {brawlers.map(brawler => (
                <BrawlerCard key={brawler.id} brawler={brawler} />
            ))}
        </div>
    );
};

export default BrawlerList;