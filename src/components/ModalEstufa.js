import React from 'react';

export default function ModalEstufa({ closeModal, modalRefEstufa ,dataOfEstufa}) {

  const  {temperatura,umidade,umidade_solo,nivel_reservatorio} = dataOfEstufa
  return (
    <div>
      <div id="banner-modal-estufa" className="modal " ref={modalRefEstufa}>
          <div className="modal-content center card">
            <h4 style={{ fontWeight: 'bold' }}>
              Informações Atualizadas da Estufa
            </h4>
            <div className="row ">
              <div
                className="col s12 m6 offset-m3"
                style={{ border: 'solid 1px grey', borderRadius: '10px' }}
              >
                <p>
                  <strong>
                    Temperatura: {temperatura}
                  </strong>
                </p>
                
                <p>
                  <strong>
                    Umidade: {umidade}
                  </strong>
                </p>
                <p>
                  <strong>
                    Umidade do Sola: {umidade_solo}
                  </strong>
                </p>
                <p>
                  <strong>
                    Nivel do Reservartorio de Agua: {nivel_reservatorio}
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
              onClick={closeModal}
              style={{ color: '#054A29', fontWeight: 'bold' }}
            >
              Fechar
            </a>
          </div>
        </div>
      
    </div>
  );
}
