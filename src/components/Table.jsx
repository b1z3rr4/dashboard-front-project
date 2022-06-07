import React, { useState, useEffect } from 'react';
import './Table.css';

export default function Table(){
    const [ dataTable, setDataTable ] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:3003/tables`).then((res)=>{
            const config = res.json();
            return config;
        }).then((data)=>{
             setDataTable(data);
        })
    },[]);

  return(
      <div className='div-table'>
      <table className='table'>
        <tr className='header'>
            <td className='td-line'>Ano</td>
            <td className='td-line'>Compras</td>
            <td className='td-line'>Vendas</td>
            <td className='td-line'>ICMS</td>
            <td className='td-line'>ST</td>
        </tr>
           {Object.keys(dataTable).map((item)=>{
               const objeto = dataTable[item]
                return(
                    <tr className='line'>
                        <td className='td-line'>{objeto.ano}</td>
                        <td className='td-line'>{objeto.compras}</td>
                        <td className='td-line'>{objeto.vendas}</td>
                        <td className='td-line'>{objeto.ICMS}</td>
                        <td className='td-line'>{objeto.ST}</td>
                    </tr>
                )
            })}
      </table>
      </div>
  )
}
