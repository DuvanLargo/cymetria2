import React, {useState} from 'react';

import './App.css';
import Perfil from './componentes/Perfil';
import Contador from './componentes/Contador';

function App() {
  //declarar un nuevo estado de contador
  const [contador, setContador]=useState(0)

  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Mis desarrolladores favoritos son</h1>
      <Perfil 
        nombre='Brais Moure'
        pais='España'
        imagen='brais'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
        linkedin='https://www.linkedin.com/in/braismoure/'
        youtube='https://www.youtube.com/@MoureDev'
        twitter='https://twitter.com/MoureDev'
      />
      <Perfil 
        nombre='facundo'
        pais='Argentina'
        imagen='facundo'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un Youtuber argentino, es el fundador de la empresa de desarrollo de software MoureDev'
        linkedin='https://www.linkedin.com/in/braismoure/'
        youtube='https://www.youtube.com/@MoureDev'
        twitter='https://twitter.com/MoureDev'
      />
      <Contador
      
      />




      {/* agregamos un contador y un boton para incrementarlo
      <p>Has hecho click {contador} veces</p>
      <button onClick={() => setContador(contador+1)}>
        Haz click aqui
      </button> */}
     </div>
    </div>
  );
}

export default App;