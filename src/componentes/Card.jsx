// components/Card.jsx
import React from 'react'
//Función que genera la card que será repetida en la web principal. 
function Card({ titulo, imagen, descripcion }) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100">
                <img src={imagen}
                    className="card-img-top" alt="Imagen de programación" />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">
                        {descripcion}
                    </p>
                    <a href="#!" className="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
    );
}

export default Card;