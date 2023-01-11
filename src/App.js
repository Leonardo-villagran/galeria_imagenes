//Importación del archivo css segpun lo solicitado en desafío.
import React from 'react'
import './index.css';
//Definición del arreglo para los contenidos de las distintas Cards.
import data from './json/data.json';

//Importación de boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Importación de Header, Card y Footer, según lo solicitado.
import Header from './componentes/Header.jsx';
import Card from './componentes/Card.jsx'
import Footer from './componentes/Footer.jsx'

//Definición de constante con los datos que se van a utilizar.
const title="Galería de Imágenes con React";
const contenido="Estos lenguajes de programación son los principales del 2023 y permiten crear programas de cualquier tamaño, adaptados a las necesidades de los clientes.";
const email="mailto:leonardovillagran@yahoo.com";
const color="primary";

const nombre='@Leonardo-Villagrán';

//Impresión de la web principal
function App() {
  return (
    <div>
      <Header title={title} color={color} />
      <div className="container">
        <div className="row justify-content-around">
        {data['arreglo'].map((elemento)=>(
            <Card 
              key={elemento.id}
              titulo={elemento.titulo}
              imagen={elemento.imagen}  
              descripcion={elemento.descripcion}
            />
          ))}
        </div>
      </div>
      <Footer contenido={contenido} email={email} color={color} nombre={nombre}/>
    </div>
    

  );
}

export default App;
