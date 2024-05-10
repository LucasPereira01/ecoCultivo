import React, { useEffect, useRef } from 'react';
import M from 'materialize-css';
import ModalEstufa from './ModalEstufa';
import ModalClima from './ModalClima';

export default function BannerModal({
  isClimaModalOpen,
  isEstufaModalOpen,
  setIsEstufaModalOpen,
  setIsClimaModalOpen,
  dataOfClim,
}) {
  const modalRefEstufa = useRef(null);
  const modalRefClima = useRef(null);

  useEffect(() => {
    // Inicializa os modals
    M.Modal.init(modalRefEstufa.current);
    M.Modal.init(modalRefClima.current);
  }, []);

  useEffect(() => {
    // Abre ou fecha o modal da estufa com base na prop isEstufaModalOpen
    const modalInstanceEstufa = M.Modal.getInstance(modalRefEstufa.current);
    if (isEstufaModalOpen) {
      modalInstanceEstufa.open();
    } else {
      modalInstanceEstufa.close();
    }
  }, [isEstufaModalOpen]);

  useEffect(() => {
    // Abre ou fecha o modal do clima com base na prop isClimaModalOpen
    const modalInstanceClima = M.Modal.getInstance(modalRefClima.current);
    if (isClimaModalOpen) {
      modalInstanceClima.open();
    } else {
      modalInstanceClima.close();
    }
  }, [isClimaModalOpen]);

  const closeModal = () => {
    setIsClimaModalOpen(false);
    setIsEstufaModalOpen(false);
  };

  return (
    <div>
      <ModalEstufa modalRefEstufa={modalRefEstufa} closeModal={closeModal} />
      <ModalClima
        modalRefClima={modalRefClima}
        closeModal={closeModal}
        dataOfClim={dataOfClim}
      />
    </div>
  );
}
