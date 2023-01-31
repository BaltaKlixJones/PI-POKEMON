import React from 'react';
import './Error.css';

function ErrorPage() {
  return (
    <div className="error-container">
      <h1 className="error-title">Error 404</h1>
      <p className="error-message">No se encontraron resultados!</p>
    </div>
  );
}

export default ErrorPage;
