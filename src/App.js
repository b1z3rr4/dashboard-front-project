import React from 'react';
import './App.css';
import Cards from './components/Cards';
import Table from './components/Table';
import Indice from './components/Indice';
import Graphic from './components/Graphic';

function App() {
  return (
    <div className='App'>
      <Cards />
      
      <div className='graphic'>
      <Indice />
      <Graphic />
      </div>
      <Table />
    </div>
  );
}

export default App;
