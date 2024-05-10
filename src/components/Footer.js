import React from 'react';

export default function Footer() {
  return (
    <footer
      className="page-footer"
      style={{
        position: 'fixed',
        bottom: '0',
        width: '100%',
        background: '#054A29',
      }}
    >
      <div style={{ padding: '5px', background: '#054A29' }}>
        <div
          className="container"
          style={{ marginBottom: '10px', background: '#054A29' }}
        >
          © Eco Cultivo
          <a
            className="grey-text text-lighten-4 right  s12 m6"
            href="https://github.com/LucasPereira01"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
