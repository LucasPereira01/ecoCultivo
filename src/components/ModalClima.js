import React from 'react';
import { getConditionIcon } from '../helper/iconesTempo.js';
import Preloader from './Preloader.js';

export default function ModalEstufa({ closeModal, modalRefClima, dataOfClim }) {
  // Verifica se os data foram fornecidos antes de tentar acessá-los
  if (!dataOfClim || !dataOfClim.data) {
    return null; // Ou renderize algo mais informativo, como uma mensagem ou componente de carregamento
  }
  const { name, state, country, data } = dataOfClim;

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
                    Clima: {getConditionIcon(data.icon)} {data.condition}
                  </strong>
                </p>
                <p>
                  <strong>Temperatura: {data.temperature}°C </strong>
                </p>
                <p>
                  <strong>
                    Vento: {data.wind_velocity}km/h, direção:{' '}
                    {data.wind_direction}
                  </strong>
                </p>
                <p>
                  <strong>
                    Localização: {name}, {state}, {country}
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
