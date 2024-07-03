import React, {InputHTMLAttributes, useEffect, useState} from 'react'
import Card, {Brawler} from '../Card/index';
import './styles.css'


interface ListProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  categoria: string
}

const List: React.FC<ListProps> = ({ label, categoria}) => {
    const cat = categoria
    const [brawlers, setBrawlers] = useState<Brawler[]>([])

    useEffect(()=>{
      const getBrawlers= async () =>{
        const response = await fetch('/brawlers.json')
        const data = await response.json()
        console.log(data)
        setBrawlers(data)
      }
    })

    return(
      <div className="list-content">
        <h1>{label}</h1>
      </div>
    )
}

export default List;