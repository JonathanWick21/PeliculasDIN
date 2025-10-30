import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import Contenedor from './Contenedor.jsx';
import Interprete from './Interprete.jsx';

function App() {

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full
mt-8">
    <h1 className='contenedor_h1'>Mis Intérpretes</h1>
      <Contenedor>
        <Interprete nombre="Marlon Brando" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png">
          Marlon Brando fue un influyente
actor estadounidense...
        </Interprete>
        <Interprete nombre="Al Pacino" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg">
          Al Pacino es un actor y director de
cine estadounidense...
        </Interprete>
      </Contenedor>
      </div>
    </>
  )
}

export default App
