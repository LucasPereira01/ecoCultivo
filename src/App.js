import React, { useEffect, useState } from 'react';
import Heade from './components/Heade.js';
import Footer from './components/Footer.js';
import TemAndClima from './components/TemAndClima.js';
import ModalData from './components/ModalData.js';
import Preloader from './components/Preloader.js';

export default function App() {
  const [dataOfClim, setDataOfClim] = useState({});
  const [isEstufaModalOpen, setIsEstufaModalOpen] = useState(false);
  const [isClimaModalOpen, setIsClimaModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDadosClimaTempo = async () => {
      try {
        const response = await fetch('http://apiadvisor.climatempo.com.br/api/v1/weather/locale/4371/current?token=6fb01449a637457ea38b3f0d9aa9879f');
        
        if (!response.ok) {
          throw new Error('Erro ao obter os dados do clima');
        }
        const data = await response.json();
        setDataOfClim(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao obter os dados do clima:', error);
      }
    };

    const fetchData = async () => {
      await fetchDadosClimaTempo();
      setTimeout(fetchData, 30 * 60 * 1000);
    };

    fetchData();
  }, []);

  const handleDataEstufa = () => {
    setIsEstufaModalOpen(true);
  };
  const handleDataClima = () => {
    setIsClimaModalOpen(true);
  };

  return (
    <div>
      <Heade />
      <TemAndClima
        handleDataEstufa={handleDataEstufa}
        handleDataClima={handleDataClima}
      />
      {isLoading || !dataOfClim ? <Preloader /> : <ModalData
        isEstufaModalOpen={isEstufaModalOpen}
        isClimaModalOpen={isClimaModalOpen}
        setIsEstufaModalOpen={setIsEstufaModalOpen}
        setIsClimaModalOpen={setIsClimaModalOpen}
        dataOfClim={dataOfClim}
      />}

      <Footer />
    </div>
  );
}
