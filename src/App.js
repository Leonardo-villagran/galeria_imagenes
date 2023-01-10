//Importación del archivo css segpun lo solicitado en desafío.
import React from 'react'
import './index.css';
import './App.css';
//Importación de boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Importación de Header, Card y Footer, según lo solicitado.
import Header from './componentes/Header.jsx';
import Card from './componentes/Card.jsx'
import Footer from './componentes/Footer.jsx'

//Definición de constante con los datos que se van a utilizar.
const title="Lenguajes de programación - 2023";
const contenido="Estos lenguajes de programación permiten crear programas de cualquier tamaño, adaptados a las necesidades de los clientes.";
const email="mailto:leonardovillagran@yahoo.com";
const color="primary";

const nombre='@Leonardo-Villagrán';

//Definición del arreglo para los contenidos de las distintas Cards.
const arreglo=[
  {'id':1,'titulo':'C#','imagen':'https://images.pexels.com/photos/11035369/pexels-photo-11035369.jpeg', 'descripcion':'El relativamente joven lenguaje de programación C# (“C Sharp”, en su voz inglesa), lanzado en 2001, se considera un lenguaje de propósito general.'},
  {'id':2,'titulo':'Pyhton', 'imagen':'https://images.pexels.com/photos/11035474/pexels-photo-11035474.jpeg', 'descripcion':'Python es un lenguaje de programación web de alto nivel basado en un código compacto, pero con una sintaxis fácil de entender.'},
  {'id':3,'titulo':'Node JS', 'imagen':'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg', 'descripcion':'Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor,basado en el lenguaje de programación JavaScript.'},
  {'id':4,'titulo':'PHP', 'imagen':'https://images.pexels.com/photos/11035390/pexels-photo-11035390.jpeg', 'descripcion':'El preprocesador de hipertexto, más conocido por sus siglas PHP, es un lenguaje de scripting escrito en Perl y C con licencia de código abierto.'}
]

//Impresión de la web principal
function App() {
  return (
    <div>
      <Header title={title} color={color} />
      <div className="container">
        <div className="row justify-content-around">
        {arreglo.map((elemento)=>(
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
