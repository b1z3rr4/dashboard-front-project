import React, { useState, useEffect } from "react";
import './Graphic.css';


export default function Graphic(){
    const [ dataGraphic, setDataGraphic ] = useState([]);
    const years = [];

    useEffect(()=>{
        fetch(`http://localhost:3003/graphics`).then((res)=>{
            const config = res.json();
            return config;
        }).then((data)=>{
             setDataGraphic(data);
        })
    },[]);

    Object.keys(dataGraphic).map((item)=>{
        years.push(item);
        return null;
    })

    const datasBase = [];

    years.map((item)=>{
        datasBase.push(dataGraphic[item])
        return null;
    })

    return(
        <div className="div-column">
            <div className="div-title">FATURAMENTO POR ANO</div>
            <div className="columns">
            <div className="bars">
                {datasBase.map((item)=>{
                    let height = `${item.porcentagem}px`;
                    if(item.porcentagem < 10){
                        height = `5px`;
                    }
                    const element = `--${item.ano}`;
                    const id = `column${item.ano}`;
                    document.documentElement.style.setProperty(element, height);
                    return(
                        <div id={id} className="column">
                            <label className="label">{item.ano} | {item.saldo} | {item.porcentagem}</label>
                        </div>
                    )
                })}
                 </div>
            </div>
        </div>
    )
}


