//components/Footer.jsx
import React from 'react'
import Alert from 'react-bootstrap/Alert'

//Función que determina el formato del footer, se utiliza un Alert desde bootstrap según lo solicitado en la pregunta 4. 
const Footer = ({ contenido, email, nombre, color }) => {
    return (
        <div className='m-2 p-2'>
            <Alert variant={color}>
                <div className="text-center">
                    <Alert.Heading>Importante:</Alert.Heading>
                    <p className="footer">{contenido}</p>
                    <a href={email}>{nombre}</a>
                </div>
            </Alert>
        </div>
    );
};

export default Footer;