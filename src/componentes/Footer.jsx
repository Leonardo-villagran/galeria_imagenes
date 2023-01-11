//components/Footer.jsx
import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge';

//Función que determina el formato del footer, se utiliza un Alert y un Badge desde bootstrap según lo solicitado en la pregunta 4. 
const Footer = ({ contenido, email, nombre, color }) => {
    return (
        <div className='p-2'>
            <Alert variant={color}>
                <div className="text-center">
                    <Alert.Heading>Importante:</Alert.Heading>
                    <p className="footer">{contenido}</p>
                    
                    <a href={email}><Badge bg="secondary">{nombre}</Badge></a>
                </div>
            </Alert>
        </div>
    );
};

export default Footer;