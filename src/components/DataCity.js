import React from 'react';

export default function DataCity({ data }) {
  const { id, nome, cidade, estado, pais, dados } = data;

  return (
    <div
      className="container"
      style={{
        width: '400px',
        height: '100px',
        padding: '20px',
      }}
    >
      <div className="card" style={{ borderRadius: '10px' }}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="frio.jpg" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Como esta o Clima:
          </span>
          <p>
            <span>
              Tempo ensolarado em Bebedouro, SP, temperatura de 31°C e umidade
              de 39%. Ótimo para culturas como tomates, pimentões e ervas que
              necessitam de luz solar e calor.
            </span>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Card Title<i class="material-icons right">close</i>
          </span>
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        </div>
      </div>
    </div>
  );
}
