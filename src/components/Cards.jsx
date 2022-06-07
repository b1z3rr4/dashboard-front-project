import React, { useState, useEffect } from "react";
import './Cards.css';

export default function Cards(){
    const [ dataCards, setDataCards ] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3003/cards`).then((res)=>{
            const config = res.json();
            return config;
          }).then((data)=>{
             setDataCards(data);
          })
    },[]);

  return(
      <div className="cards">
          {dataCards.map((item)=>{
                return(<div className="card">
                    <span className="name">{item.tag}</span>
                    <span className="dol">{item.valor}</span>
                </div>)
            })
          }
      </div>
  )
}