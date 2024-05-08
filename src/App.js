import React, { useEffect, useState } from 'react';
import * as api from './api/climaTempo.js';
import DataCity from './components/DataCity.js';
import Heade from './components/Heade.js';
import Footer from './components/Footer.js';

export default function App() {
  const [dataOfClim, setDataOfClim] = useState([]);

  useEffect(() => {
    const fetchDadosClimaTempo = async () => {
      const data = await api.getStatusCidade();
      console.log(data);
      setDataOfClim(data);
    };

    fetchDadosClimaTempo();
  }, []); // Executa uma vez, quando o componente é montado

  let isTemp = false;

  return (
    <div>
      <Heade />
      <div className="center">
        <img
          src="./estufa.jpg"
          alt="Estufa"
          style={{ width: '100%', alignItems: 'center' }}
        />
      </div>

      {isTemp === true && <DataCity data={dataOfClim} />}

      <Footer />
    </div>
  );
}
