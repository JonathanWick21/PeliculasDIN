import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import Contenedor from './Contenedor.jsx';
import Interprete from './Interprete.jsx';
import InterpretePeli10 from './InterpretePeli10.jsx';
import peliculas from './data/peliculas.js'

function App() {

  return (
    <>
    <h1 className='contenedor_h1 text-center pt-10 pb-5'>Mis Intérpretes</h1>
      <Contenedor>
        {peliculas.filter(pelicula => pelicula.clasificacion === "Drama").map((pelicula) =>
          pelicula.actores.map((actor, index) => (
            <InterpretePeli10
              key={index}
              nombre={actor.nombre}
              foto={actor.imagen}
              esNota10={pelicula.nota === 10}>
                {actor.biografia}, 
            </InterpretePeli10>
          ))
        )}
      
    
{/* 

export default App

        </Interprete>
        <Interprete nombre="Al Pacino" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg">
          Al Pacino es un actor y director de
cine estadounidense...
        </Interprete>
        <Interprete nombre="Marlon Brando" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png">
          Marlon Brando fue un influyente
actor estadounidense...
        </Interprete>
        <Interprete nombre="Al Pacino" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg">
          Al Pacino es un actor y director de
cine estadounidense...
        </Interprete>
        <Interprete nombre="Marlon Brando" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png">
          Marlon Brando fue un influyente
actor estadounidense...
        </Interprete>
        <Interprete nombre="Al Pacino" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg">
          Al Pacino es un actor y director de
cine estadounidense...
        </Interprete>
        <Interprete nombre="Marlon Brando" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png">
          Marlon Brando fue un influyente
actor estadounidense...
        </Interprete>
        <Interprete nombre="Al Pacino" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg">
          Al Pacino es un actor y director de
cine estadounidense...
        </Interprete> */}
      </Contenedor>
    </>
  )
}

export default App
