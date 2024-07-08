import React, { useEffect, useState} from 'react';
import './styles.css'

export interface Brawler{
    nome: string;
    imagem: string;
    raridade: string;
    classe: string;
}

interface BrawlerProps{
    brawler: Brawler;
}

const Card: React.FC<BrawlerProps> = ({ brawler }) => {
    var raridade=" "
    raridade = brawler.raridade
    
    return (
        <div className="brawler-card" id={`brawler-card-${raridade}`}>
            <img src={brawler.imagem} alt={brawler.nome} />
            <section id='info'>
                <h3>{brawler.nome}</h3>
                <p>{brawler.raridade}</p>
                <p>{brawler.classe}</p>
            </section>
                
        </div>
    )
}

export default Card;

