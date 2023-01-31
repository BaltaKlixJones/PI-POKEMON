import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="error-container">
      <h1 className="error-title">Error! </h1>
      <p className="error-message">No se encontraron resultados!</p>
      <Link to="/home">
      <button className="reload-button" onClick={"location.reload()"}>
            <i className="fas fa-sync-alt">Volver</i>
          </button>
          </Link>
    </div>
  );
}

export default ErrorPage;
