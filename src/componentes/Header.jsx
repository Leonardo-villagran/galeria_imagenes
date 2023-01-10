// components/Header.jsx
import React from 'react'
import Alert from 'react-bootstrap/Alert'

//Función que determina el formato del header 
const Header = ({ title, color }) => {
    return (
        <div className='m-2 p-2'>
            <Alert variant={color}>
                <div className='d-block text-center'>
                    <h1>{title}</h1>
                </div>
            </Alert>
        </div>
    );
};

export default Header;