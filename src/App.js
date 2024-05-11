import React, { useEffect, useState } from 'react';
import * as api from './api/climaTempo.js';
import Heade from './components/Heade.js';
import Footer from './components/Footer.js';
import TemAndClima from './components/TemAndClima.js';
import ModalData from './components/ModalData.js';
import Preloader from './components/Preloader.js';

export default function App() {
  const [dataOfClim, setDataOfClim] = useState({}); // Inicialmente, nenhum dado está disponível
  const [isEstufaModalOpen, setIsEstufaModalOpen] = useState(false);
  const [isClimaModalOpen, setIsClimaModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Adiciona um estado de carregamento

  useEffect(() => {
    const fetchDadosClimaTempo = async () => {
      try {
        const data = await api.getStatusCidade();
        console.log(data);
        setDataOfClim(data);
        setIsLoading(false); // Marca o carregamento como concluído quando os dados estão disponíveis
      } catch (error) {
        console.error('Erro ao obter os dados do clima:', error);
      }
    };

    // Função para buscar os dados do clima inicialmente e a cada 30 minutos
    const fetchData = async () => {
      await fetchDadosClimaTempo();
      setTimeout(fetchData, 30 * 60 * 1000); // Executa a função a cada 30 minutos (30 * 60 * 1000 milissegundos)
    };

    fetchData();
  }, []); // Executa uma vez, quando o componente é montado

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
      {isLoading || dataOfClim ===  null ? <Preloader />:<ModalData
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
