import React, { useState, useEffect } from 'react';
import './Indice.css';

export default function Indice(){
    const [ dataIndice, setDataIndice ] = useState([]);
    const years = [];

    useEffect(()=>{
        fetch(`http://localhost:3003/graphics`).then((res)=>{
            const config = res.json();
            return config;
        }).then((data)=>{
             setDataIndice(data);
        })
    },[]);

    Object.keys(dataIndice).map((item)=>{
        years.push(item);
        return null;
    })



    return(
        <div className="indice">
            <div className="indice-title">
                <span>Indice</span>
            </div>

            <div className="indice-div">
            <div className="indice-list">
                {years.map(()=>{
                    return( 
                        <span className='circle'></span>
                    )
                })}
                 </div>
                  <div className="indice-list">
                {years.map((item)=>{
                    return( 
                        <span className='year'>{item}</span>
                    )
                })}
                  </div>
            </div>
        </div>
    )
}