import React, { useEffect, useState } from 'react';
import * as api from './api/climaTempo.js';

export default function App() {
  const [dataOfClim ,setDataOfClim] = useState({})


  useEffect(() => {
    const fetchDadosClimaTempo = async () => {
      const data = await api.getStatusCidade();
      setDataOfClim(data)
    };
    
    fetchDadosClimaTempo();
  }, []); // Executa uma vez, quando o componente é montado
  
  const {id,name,country,state,data}  = dataOfClim
  console.log(name);

  return <div className='container'><h1>
    Projeto Integrador EcoCultivo
  </h1>
    
      <p key={id}>{name}</p>
  
  </div>;
}
