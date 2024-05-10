import React from 'react';
import { getConditionIcon } from '../helper/iconesTempo.js';
import Preloader from './Preloader.js';

export default function ModalEstufa({ closeModal, modalRefClima, dataOfClim }) {
  // Verifica se os dados foram fornecidos antes de tentar acessá-los
  if (!dataOfClim || !dataOfClim.dados) {
    return null; // Ou renderize algo mais informativo, como uma mensagem ou componente de carregamento
  }
  const { nome, estado, pais, dados } = dataOfClim;

  return (
    <div>
      {!dataOfClim ? (
        <Preloader />
      ) : (
        <div id="banner-modal-clima" className="modal " ref={modalRefClima}>
          <div className="modal-content center card">
            <h4 style={{ fontWeight: 'bold' }}>
              Informações Atualizadas do Clima Tempo
            </h4>
            <div className="row ">
              <div
                className="col s12 m6 offset-m3"
                style={{ border: 'solid 1px grey', borderRadius: '10px' }}
              >
                <p>
                  <strong>
                    Clima: {getConditionIcon(dados.icon)} {dados.condition}
                  </strong>
                </p>
                <p>
                  <strong>Temperatura: {dados.temperature}°C </strong>
                </p>
                <p>
                  <strong>
                    Vento: {dados.wind_velocity}km/h, direção:{' '}
                    {dados.wind_direction}
                  </strong>
                </p>
                <p>
                  <strong>
                    Localização: {nome}, {estado}, {pais}
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
      )}
    </div>
  );
}
