import React from 'react';

export default function Heade() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper" style={{ background: '#16a085' }}>
          <span className="brand-logo center ">
            Projeto Integrador EcoCultivo
          </span>
          <ul id="nav-mobile" style={{ fontWeight: 'bold' }}>
            <li>
              <span style={{ marginLeft: '20px' }}>Temperatura & Umidade</span>
            </li>
            <li>
              <span style={{ marginLeft: '20px' }}>Clima Tempo</span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
