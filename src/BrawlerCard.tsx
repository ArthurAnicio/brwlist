import React from 'react';
import { Brawler } from './Types';

interface BrawlerCardProps {
    brawler: Brawler;
}

const BrawlerCard: React.FC<BrawlerCardProps> = ({ brawler }) => {
    return (
        <div className="brawler-card">
            <img src={brawler.imagem} alt={brawler.nome} />
            <h3>{brawler.nome}</h3>
            <p>Raridade: {brawler.raridade}</p>
            <p>Classe: {brawler.classe}</p>
        </div>
    );
};

export default BrawlerCard;