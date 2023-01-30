import React from 'react';
import { Link } from 'react-router-dom';
import "./Landing.css"

const Landing = () => {
    return (
        <div className="home-page">
            <h1>Bienvenido al mundo Pokemon !</h1>
            <Link to="/home">
                <button className="home-button">Empezar Ahora</button>
            </Link>
        </div>
    );
};

export default Landing;
