import React from 'react';

export default function TemAndClima({ handleDataClima, handleDataEstufa }) {
  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <div className="row center-align">
        <div className="col s6 m6" onClick={handleDataEstufa}>
          <div
            className="card  darken-1 hoverable"
            style={{ background: '#054A29' }}
          >
            <div className="card-content white-text">
              <span className="card-title">Estufa</span>
            </div>
            <div className="card-image" style={styles.cardImage}>
              <img
                src="estufaCard.jpg"
                style={styles.cardImageContent}
                alt="estura"
              />
            </div>
          </div>
        </div>
        <div className="col s6 m6 " onClick={handleDataClima}>
          <div
            className="card   darken-1 hoverable"
            style={{ background: '#054A29' }}
          >
            <div className="card-content white-text">
              <span className="card-title">Clima</span>
            </div>
            <div className="card-image" style={styles.cardImage}>
              <img
                src="SOLCard.jpg"
                style={styles.cardImageContent}
                alt="estura"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  cardImage: {
    width: '100%',
    height: '350px' /* ou qualquer altura desejada */,
  },
  cardImageContent: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};
