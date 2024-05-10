import React from 'react';

export default function ModalEstufa({ closeModal, modalRefEstufa }) {
  return (
    <div>
      {/* Modal */}
      <div id="banner-modal-estufa" className="modal" ref={modalRefEstufa}>
        <div className="modal-content">
          <h4>Conteúdo do Modal</h4>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
            onClick={closeModal}
          >
            Fechar
          </a>
        </div>
      </div>
    </div>
  );
}
