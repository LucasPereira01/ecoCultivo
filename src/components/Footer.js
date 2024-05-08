import React from 'react';

export default function Footer() {
  return (
    <footer
      className="page-footer"
      style={{
        position: 'fixed',
        bottom: '0',
        width: '100%',
        background: '#16a085',
      }}
    >
      <div style={{ padding: '5px', background: '#16a085' }}>
        <div
          className="container"
          style={{ marginBottom: '10px', background: '#16a085' }}
        >
          © Eco Cultivo
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/LucasPereira01"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
